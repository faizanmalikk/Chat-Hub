import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth";

import { pusherServer } from "@/app/utils/pusher";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

const handler = async (
    request: Request,
    response: NextApiResponse
) => {
    // const session = await getServerSession(request, response, authOptions);

    // if (!session?.user?.email) {
    //     return new NextResponse('Error', { status: 401 });
    // }

    return NextResponse.json({ success: true })


    // const socketId = request.body.socket_id;
    // const channel = request.body.channel_name;
    // const data = {
    //     user_id: session.user.email,
    // };

    // const authResponse = pusherServer.authorizeChannel(socketId, channel, data);
    // return response.send(authResponse);
};

export { handler as GET, handler as POST };