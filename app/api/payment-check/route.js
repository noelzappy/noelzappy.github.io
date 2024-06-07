import { NextResponse } from "next/server";
import paymentsData from "@/data/paymentsData";

export async function GET(request) {
  const { searchParams } = request.nextUrl;
  const projectId = searchParams.get("projectId");
  const payment = paymentsData.find((payment) => payment.id === projectId);
  return NextResponse.json(payment);
}
