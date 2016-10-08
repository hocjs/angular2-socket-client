import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private url: string;
  private socket: any;

  constructor() {

    this.socket = io(this.url);

    this
      .on('connect')
      .subscribe(() => {
        console.log(`connected! id: ${this.socket.id}`);
      });

    this
      .on('disconnect')
      .subscribe(() => {
        console.log(`disconnected! id: ${this.socket.id}`);
      });
  }

  public on(event: string) {
    return Observable.fromEvent(this.socket, event);
  }

  public emit(event: string, value: Object) {
    this
      .socket
      .emit(event, value);
  }
}
