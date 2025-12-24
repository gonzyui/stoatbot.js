import { Event, Events } from "./event";
/**
 * Represents the event handler for webhook creations.
 * @extends Event
 * @private
 */
export class WebhookCreate extends Event {
  /**
   * Handles the webhook create event.
   * @param {id: string, channel_id: string, server_id: string, name: string} - The data for the event, containing the webhook ID, channel ID, server ID, and name.
   * @returns {void}
   */
  handle(data: {
    id: string;
    channel_id: string;
    server_id: string;
    name: string;
    creator_id: string;
    token: string;
  }): void {
    this.client.emit(
      Events.WEBHOOKS_CREATE,
      data.id,
      data.channel_id,
      data.name,
      data.creator_id,
      data.token,
    );
  }
}
