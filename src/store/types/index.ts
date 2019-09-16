export enum PlayState {
  start = 'start',
  processing = 'processing'
}

export interface IRootState {
  playState: PlayState;
}
