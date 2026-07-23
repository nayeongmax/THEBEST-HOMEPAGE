import { getStore } from "@netlify/blobs";

export default async (req) => {
    const url = new URL(req.url);
    const admin = url.searchParams.get("admin");

    if (admin !== "thebest2026") {
        return new Response(JSON.stringify({ error: "권한이 없습니다." }), {
            status: 403,
            headers: { "Content-Type": "application/json" }
        });
    }

    try {
        const store = getStore("intakes");
        const { blobs } = await store.list();

        const results = [];
        for (const blob of blobs) {
            const raw = await store.get(blob.key);
            if (raw) {
                const parsed = JSON.parse(raw);
                results.push({
                    companyName: blob.key,
                    createdAt: parsed.createdAt,
                    updatedAt: parsed.updatedAt,
                    industry: parsed.data?.industry || '-'
                });
            }
        }

        results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        return new Response(JSON.stringify(results), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
