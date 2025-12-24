import { Event, Events } from "./event";

/**
 * Represents the event handler for webhook deletions.
 * @extends Event
 * @private
 */
export class WebhookDelete extends Event {
  /**
   * Handles the webhook delete event.
   * @param {id: string, channel_id: string, server_id: string} - The data for the event, containing the webhook ID, channel ID, and server ID.
   * @returns {void}
   */
  handle(data: { id: string; channel_id: string; server_id: string }): void {
    this.client.emit(Events.WEBHOOKS_DELETE, data.id);
  }
}
