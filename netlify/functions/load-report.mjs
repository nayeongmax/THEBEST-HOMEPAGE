import { getStore } from "@netlify/blobs";

export default async (req) => {
    const url = new URL(req.url);
    const companyName = url.searchParams.get("company");

    if (!companyName) {
        return new Response(JSON.stringify({ error: "업체명이 필요합니다." }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }

    try {
        const store = getStore("reports");
        const raw = await store.get(companyName);

        if (!raw) {
            return new Response(JSON.stringify({ error: "보고서를 찾을 수 없습니다." }), {
                status: 404,
                headers: { "Content-Type": "application/json" }
            });
        }

        const report = JSON.parse(raw);
        return new Response(JSON.stringify(report), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
