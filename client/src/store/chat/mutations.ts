import { ChatState, Node } from '@/interfaces/chatState.interface';

export default {
  SET_NODE(state: ChatState, payload: Node): void {
    state.node = payload;
  },
  SET_TIME_OUT(state: ChatState, payload: number): void {
    state.timeout = payload;
  },
  SET_AUTO_PLAY(state: ChatState, payload: boolean): void {
    state.autoplay = payload;
  },
  SET_LOADING(state: ChatState, payload: boolean): void {
    state.isLoading = payload;
  },
};