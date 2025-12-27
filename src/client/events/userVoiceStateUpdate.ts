import { Event, API, Events } from "./event";

/**
 * Data structure for user voice state update event.
 */
export interface UserVoiceStateUpdateData {
  id: string;
  channel_id: string;
  data: { is_publishing: boolean; screensharing: boolean; camera: boolean };
}

/**
 * Represents the event handler for user voice state updates.
 * @private
 * @extends Event
 */
export class UserVoiceStateUpdate extends Event {
  /**
   * Handles the user voice state update event.
   * @param {{ id: string; channel_id: string; data: { is_publishing: boolean; screensharing: boolean; camera: boolean; }; }} data - The data for the event, containing the user ID, channel ID, and updated voice state data.
   * @returns {void}
   */
  handle(data: UserVoiceStateUpdateData): void {
    this.client.emit(Events.USER_VOICE_STATE_UPDATE, data);
  }
}
