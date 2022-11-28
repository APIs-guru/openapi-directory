import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WebhookEventsEnum {
    Call = "CALL"
}
export declare enum WebhookMetadataPolicyEnum {
    None = "NONE",
    Header = "HEADER",
    Body = "BODY"
}
export declare enum WebhookSigningAlgoEnum {
    HmacSha256 = "HMAC_SHA256",
    None = "NONE"
}
export declare class WebhookStatistics extends SpeakeasyBase {
    failed?: boolean;
    totalAttempts?: number;
    totalFailures?: number;
    totalSuccesses?: number;
}
export declare enum WebhookStatusEnum {
    Active = "ACTIVE",
    Paused = "PAUSED"
}
export declare class Webhook extends SpeakeasyBase {
    accountId?: string;
    createdAt?: string;
    events?: WebhookEventsEnum[];
    expireAt?: string;
    id?: string;
    metadataPolicy?: WebhookMetadataPolicyEnum;
    purgeAt?: string;
    renewedAt?: string;
    signingAlgo?: WebhookSigningAlgoEnum;
    signingKey?: string;
    statistics?: WebhookStatistics;
    status?: WebhookStatusEnum;
    url?: string;
    userId?: string;
}
