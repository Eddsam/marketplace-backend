import { SECRET } from "@/data/dotenv";
import { NextRequest } from "next/server";
//@ts-ignore
import jwt from "jsonwebtoken";

type Handler = (req: NextRequest, context?: any) => Promise<Response>;

export function withAuth(handler: Handler): Handler {
  return async (req, context) => {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return new Response(
        JSON.stringify({ status: false, message: "Forbidden" }),
        {
          status: 403,
        }
      );
    }

    try {
      const data = jwt.verify(token, SECRET);
      console.log(data);
      if (new Date(data.exp) > new Date()) {
        throw new Error();
      }
    } catch (e) {
      return new Response(
        JSON.stringify({ status: false, message: "Unauthorized" }),
        {
          status: 401,
        }
      );
    }

    // If authenticated, call the original handler
    return handler(req, context);
  };
}
