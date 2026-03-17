import { NextResponse } from "next/server";

const proxy = async (req) => {
  const res = NextResponse.next();
  return res;
};

export default proxy;
