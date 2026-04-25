
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const q = req.query.q as string | undefined;

  res.status(200).json({
    items: q ? [{ id: "test", name: `You searched for: ${q}` }] : [],
  });
}
