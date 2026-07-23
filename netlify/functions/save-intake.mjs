import { getStore } from "@netlify/blobs";

export default async (req) => {
    if (req.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
    }

    try {
        const { companyName, password, data } = await req.json();

        if (!companyName || !password) {
            return new Response(JSON.stringify({ error: "업체명과 비밀번호가 필요합니다." }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        const store = getStore("intakes");
        const existing = await store.get(companyName);

        if (existing) {
            const parsed = JSON.parse(existing);

            if (parsed.password !== password) {
                return new Response(JSON.stringify({ error: "비밀번호가 일치하지 않습니다." }), {
                    status: 403,
                    headers: { "Content-Type": "application/json" }
                });
            }

            const createdAt = new Date(parsed.createdAt);
            const now = new Date();
            const diffDays = (now - createdAt) / (1000 * 60 * 60 * 24);

            if (diffDays > 3) {
                return new Response(JSON.stringify({ error: "수정 기간(3일)이 만료되었습니다. 수정이 필요하시면 담당자에게 문의해주세요." }), {
                    status: 403,
                    headers: { "Content-Type": "application/json" }
                });
            }

            await store.set(companyName, JSON.stringify({
                ...parsed,
                data,
                updatedAt: new Date().toISOString()
            }));
        } else {
            const now = new Date().toISOString();
            await store.set(companyName, JSON.stringify({
                password,
                data,
                createdAt: now,
                updatedAt: now
            }));
        }

        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
