import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const req = await request.json();

    console.log(req)

    if(req.email && req.password){
      return NextResponse.json({
        To: req.name,
        Message: "All well here",
        RequestType: "POST"
      });
    }
    else {
      return new NextResponse('Please include your name in the POST request');
    }
  }