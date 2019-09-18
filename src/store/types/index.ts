export enum PlayState {
  start,
  processing
}

export interface IRootState {
  playState: PlayState;
}
