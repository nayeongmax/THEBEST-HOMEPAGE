import { getStore } from "@netlify/blobs";

export default async (req) => {
    const url = new URL(req.url);
    const company = url.searchParams.get("company");
    const password = url.searchParams.get("password");
    const admin = url.searchParams.get("admin");

    if (!company) {
        return new Response(JSON.stringify({ error: "업체명이 필요합니다." }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }

    try {
        const store = getStore("intakes");
        const raw = await store.get(company);

        if (!raw) {
            return new Response(JSON.stringify({ error: "등록된 정보를 찾을 수 없습니다." }), {
                status: 404,
                headers: { "Content-Type": "application/json" }
            });
        }

        const parsed = JSON.parse(raw);

        if (admin === "thebest2026") {
            const createdAt = new Date(parsed.createdAt);
            const diffDays = (new Date() - createdAt) / (1000 * 60 * 60 * 24);
            return new Response(JSON.stringify({
                data: parsed.data,
                createdAt: parsed.createdAt,
                updatedAt: parsed.updatedAt,
                editable: diffDays <= 3
            }), {
                headers: { "Content-Type": "application/json" }
            });
        }

        if (parsed.password !== password) {
            return new Response(JSON.stringify({ error: "비밀번호가 일치하지 않습니다." }), {
                status: 403,
                headers: { "Content-Type": "application/json" }
            });
        }

        const createdAt = new Date(parsed.createdAt);
        const diffDays = (new Date() - createdAt) / (1000 * 60 * 60 * 24);

        return new Response(JSON.stringify({
            data: parsed.data,
            createdAt: parsed.createdAt,
            updatedAt: parsed.updatedAt,
            editable: diffDays <= 3
        }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
