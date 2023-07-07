import { Direction, GameState } from "./types";

export enum ClientMessageType {
  SetNickname,
  SetDirection,
  Jump,
  Ping,
}

export enum ServerMessageType {
  StateUpdate,
  PingResponse,
}

export type ClientMessage =
  | SetNicknameMessage
  | SetDirectionMessage
  | JumpMessage
  | PingMessage;

export type SetDirectionMessage = {
  type: ClientMessageType.SetDirection;
  direction: Direction;
};

export type SetNicknameMessage = {
  type: ClientMessageType.SetNickname;
  nickname: string;
};

export type PingMessage = {
  type: ClientMessageType.Ping;
  id: number;
};

export type JumpMessage = {
  type: ClientMessageType.Jump;
};

export type ServerMessage = StateUpdateMessage | PingResponseMessage;

export type StateUpdateMessage = {
  type: ServerMessageType.StateUpdate;
  state: GameState;
  ts: number;
};

export type PingResponseMessage = {
  type: ServerMessageType.PingResponse;
  id: number;
};
