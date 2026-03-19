// rbac.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: true,
})
export class RbacGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    const userId = client.handshake.query.userId as string;
    const roleId = client.handshake.query.roleId as string;

    if (userId) client.join(userId);
    if (roleId) client.join(roleId); // 🔥 role-based broadcast
  }

  // 🔥 notify single user
  notifyUser(userId: string) {
    this.server.to(userId).emit('permission_updated');
  }

  // 🔥 notify role-based users
  notifyRole(roleId: string) {
    this.server.to(roleId).emit('role_updated');
  }
}
