import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateServiceServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateServicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare enum UpdateServiceUpdateServiceRequestWebhookMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    consumptionReportInterval?: number;
    defaultChannelCreatorRoleSid?: string;
    defaultChannelRoleSid?: string;
    defaultServiceRoleSid?: string;
    friendlyName?: string;
    limitsChannelMembers?: number;
    limitsUserChannels?: number;
    notificationsAddedToChannelEnabled?: boolean;
    notificationsAddedToChannelTemplate?: string;
    notificationsInvitedToChannelEnabled?: boolean;
    notificationsInvitedToChannelTemplate?: string;
    notificationsNewMessageEnabled?: boolean;
    notificationsNewMessageTemplate?: string;
    notificationsRemovedFromChannelEnabled?: boolean;
    notificationsRemovedFromChannelTemplate?: string;
    postWebhookUrl?: string;
    preWebhookUrl?: string;
    reachabilityEnabled?: boolean;
    readStatusEnabled?: boolean;
    typingIndicatorTimeout?: number;
    webhookFilters?: string[];
    webhookMethod?: UpdateServiceUpdateServiceRequestWebhookMethodEnum;
    webhooksOnChannelAddMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum;
    webhooksOnChannelAddUrl?: string;
    webhooksOnChannelAddedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum;
    webhooksOnChannelAddedUrl?: string;
    webhooksOnChannelDestroyMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum;
    webhooksOnChannelDestroyUrl?: string;
    webhooksOnChannelDestroyedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum;
    webhooksOnChannelDestroyedUrl?: string;
    webhooksOnChannelUpdateMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum;
    webhooksOnChannelUpdateUrl?: string;
    webhooksOnChannelUpdatedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum;
    webhooksOnChannelUpdatedUrl?: string;
    webhooksOnMemberAddMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum;
    webhooksOnMemberAddUrl?: string;
    webhooksOnMemberAddedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum;
    webhooksOnMemberAddedUrl?: string;
    webhooksOnMemberRemoveMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum;
    webhooksOnMemberRemoveUrl?: string;
    webhooksOnMemberRemovedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum;
    webhooksOnMemberRemovedUrl?: string;
    webhooksOnMessageRemoveMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum;
    webhooksOnMessageRemoveUrl?: string;
    webhooksOnMessageRemovedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum;
    webhooksOnMessageRemovedUrl?: string;
    webhooksOnMessageSendMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum;
    webhooksOnMessageSendUrl?: string;
    webhooksOnMessageSentMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum;
    webhooksOnMessageSentUrl?: string;
    webhooksOnMessageUpdateMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum;
    webhooksOnMessageUpdateUrl?: string;
    webhooksOnMessageUpdatedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum;
    webhooksOnMessageUpdatedUrl?: string;
}
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServicePathParams;
    request?: UpdateServiceUpdateServiceRequest;
    security: UpdateServiceSecurity;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV1Service?: shared.ChatV1Service;
}
