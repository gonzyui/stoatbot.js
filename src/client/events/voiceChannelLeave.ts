import { voiceParticipant } from "../../struct";
import { ChannelTypes } from "../../utils";
import { Event, API, Events } from "./event";

/**
 * Data structure for voice channel leave event.
 */
export interface VoiceChannelLeaveData {
  id: string;
  user: string;
}

/**
 * Represents the event handler for voice channel leaves.
 * @private
 * @extends Event
 */
export class VoiceChannelLeave extends Event {
  /**
   * Handles the voice channel leave event.
   * @param {{ id: string; user: string; }} data - The data for the event, containing the channel ID and user ID.
   * @returns {void}
   */
  handle(data: VoiceChannelLeaveData): void {
    const channel = this.client.channels.cache.get(data.id);
    if (
      channel?.type === ChannelTypes.VOICE ||
      channel?.type === ChannelTypes.GROUP
    ) {
      channel.voice?.delete(data.id);
    }
    this.client.emit(Events.VOICE_CHANNEL_LEAVE, data);
  }
}
