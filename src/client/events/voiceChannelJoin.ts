import { voiceParticipant } from "../../struct";
import { ChannelTypes } from "../../utils";
import { Event, API, Events } from "./event";

/**
 * Data structure for voice channel join event.
 */
export interface VoiceChannelJoinData {
  id: string;
  state: voiceParticipant;
}

/**
 * Represents the event handler for voice channel joins.
 * @private
 * @extends Event
 */
export class VoiceChannelJoin extends Event {
  /**
   * Handles the voice channel join event.
   * @param {{ id: string; state: voiceParticipant; }} data - The data for the event, containing the channel ID and participant state.
   * @returns {void}
   */
  handle(data: VoiceChannelJoinData): void {
    const channel = this.client.channels.cache.get(data.id);
    if (
      channel?.type === ChannelTypes.VOICE ||
      channel?.type === ChannelTypes.GROUP
    ) {
      channel.voice?.set(data.id, data.state);
    }
    this.client.emit(Events.VOICE_CHANNEL_JOIN, data);
  }
}
