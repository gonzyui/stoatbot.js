import { Event, Events } from "./event";

/**
 * Represents the event handler for webhook updates.
 * @extends Event
 * @private
 */
export class WebhookUpdate extends Event {
  /**
   * Handles the webhook update event.
   * @param {id: string, data: { name: string; avatar?: { _id: string; tag: string; filename: string; metadata: any; content_type: string; size: number; }; remove: string[]; }} - The data for the event, containing the webhook ID and updated webhook data.
   * @returns {void}
   */
  handle(data: {
    id: string;
    data: {
      name: string;
      avatar?: {
        _id: string;
        tag: string;
        filename: string;
        metadata: any;
        content_type: string;
        size: number;
      };
      remove: string[];
    };
  }): void {
    this.client.emit(
      Events.WEBHOOKS_UPDATE,
      data.id,
      data.data.name,
      data.data.avatar,
      data.data.remove,
    );
  }
}
