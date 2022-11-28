import { SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
export declare class WebhooksResponseError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class WebhooksResponsePagination extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    totalCount?: number;
}
export declare class WebhooksResponse extends SpeakeasyBase {
    data?: Webhook[];
    error?: WebhooksResponseError;
    pagination?: WebhooksResponsePagination;
    success?: boolean;
}
