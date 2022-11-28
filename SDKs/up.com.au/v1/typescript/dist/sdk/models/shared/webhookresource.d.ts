import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookResourceAttributes extends SpeakeasyBase {
    createdAt: Date;
    description: string;
    secretKey?: string;
    url: string;
}
export declare class WebhookResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare class WebhookResourceRelationshipsLogsLinks extends SpeakeasyBase {
    related: string;
}
export declare class WebhookResourceRelationshipsLogs extends SpeakeasyBase {
    links?: WebhookResourceRelationshipsLogsLinks;
}
export declare class WebhookResourceRelationships extends SpeakeasyBase {
    logs: WebhookResourceRelationshipsLogs;
}
/**
 * Provides information about a webhook.
 *
**/
export declare class WebhookResource extends SpeakeasyBase {
    attributes: WebhookResourceAttributes;
    id: string;
    links?: WebhookResourceLinks;
    relationships: WebhookResourceRelationships;
    type: string;
}
