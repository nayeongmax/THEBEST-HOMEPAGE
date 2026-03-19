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

        const store = getStore("reports");
        await store.set(companyName, JSON.stringify({ password, data }));

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
