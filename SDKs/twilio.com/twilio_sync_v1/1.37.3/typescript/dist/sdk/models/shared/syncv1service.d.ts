import { SpeakeasyBase } from "../../../internal/utils";
export declare class SyncV1Service extends SpeakeasyBase {
    accountSid?: string;
    aclEnabled?: boolean;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    links?: Map<string, any>;
    reachabilityDebouncingEnabled?: boolean;
    reachabilityDebouncingWindow?: number;
    reachabilityWebhooksEnabled?: boolean;
    sid?: string;
    uniqueName?: string;
    url?: string;
    webhookUrl?: string;
    webhooksFromRestEnabled?: boolean;
}
