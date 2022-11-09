import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class IpMessagingV1Service extends SpeakeasyBase {
    accountSid?: string;
    consumptionReportInterval?: number;
    dateCreated?: Date;
    dateUpdated?: Date;
    defaultChannelCreatorRoleSid?: string;
    defaultChannelRoleSid?: string;
    defaultServiceRoleSid?: string;
    friendlyName?: string;
    limits?: any;
    links?: Map<string, any>;
    notifications?: any;
    postWebhookUrl?: string;
    preWebhookUrl?: string;
    reachabilityEnabled?: boolean;
    readStatusEnabled?: boolean;
    sid?: string;
    typingIndicatorTimeout?: number;
    url?: string;
    webhookFilters?: string[];
    webhookMethod?: string;
    webhooks?: any;
}
