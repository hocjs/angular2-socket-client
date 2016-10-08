'use strict';

// Import all services
import { SocketService } from './socket.service';

// Export all services
export * from './socket.service';

// Export convenience property
export const PROVIDERS: any[] = [
  SocketService
];

