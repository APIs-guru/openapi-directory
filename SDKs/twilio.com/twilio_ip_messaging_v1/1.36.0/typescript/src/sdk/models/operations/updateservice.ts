import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESERVICE_SERVERS = [
	"https://ip-messaging.twilio.com",
];



export class UpdateServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateServiceUpdateServiceRequestWebhookMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ConsumptionReportInterval;" })
  consumptionReportInterval?: number;

  @Metadata({ data: "form, name=DefaultChannelCreatorRoleSid;" })
  defaultChannelCreatorRoleSid?: string;

  @Metadata({ data: "form, name=DefaultChannelRoleSid;" })
  defaultChannelRoleSid?: string;

  @Metadata({ data: "form, name=DefaultServiceRoleSid;" })
  defaultServiceRoleSid?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Limits.ChannelMembers;" })
  limitsChannelMembers?: number;

  @Metadata({ data: "form, name=Limits.UserChannels;" })
  limitsUserChannels?: number;

  @Metadata({ data: "form, name=Notifications.AddedToChannel.Enabled;" })
  notificationsAddedToChannelEnabled?: boolean;

  @Metadata({ data: "form, name=Notifications.AddedToChannel.Template;" })
  notificationsAddedToChannelTemplate?: string;

  @Metadata({ data: "form, name=Notifications.InvitedToChannel.Enabled;" })
  notificationsInvitedToChannelEnabled?: boolean;

  @Metadata({ data: "form, name=Notifications.InvitedToChannel.Template;" })
  notificationsInvitedToChannelTemplate?: string;

  @Metadata({ data: "form, name=Notifications.NewMessage.Enabled;" })
  notificationsNewMessageEnabled?: boolean;

  @Metadata({ data: "form, name=Notifications.NewMessage.Template;" })
  notificationsNewMessageTemplate?: string;

  @Metadata({ data: "form, name=Notifications.RemovedFromChannel.Enabled;" })
  notificationsRemovedFromChannelEnabled?: boolean;

  @Metadata({ data: "form, name=Notifications.RemovedFromChannel.Template;" })
  notificationsRemovedFromChannelTemplate?: string;

  @Metadata({ data: "form, name=PostWebhookUrl;" })
  postWebhookUrl?: string;

  @Metadata({ data: "form, name=PreWebhookUrl;" })
  preWebhookUrl?: string;

  @Metadata({ data: "form, name=ReachabilityEnabled;" })
  reachabilityEnabled?: boolean;

  @Metadata({ data: "form, name=ReadStatusEnabled;" })
  readStatusEnabled?: boolean;

  @Metadata({ data: "form, name=TypingIndicatorTimeout;" })
  typingIndicatorTimeout?: number;

  @Metadata({ data: "form, name=WebhookFilters;" })
  webhookFilters?: string[];

  @Metadata({ data: "form, name=WebhookMethod;" })
  webhookMethod?: UpdateServiceUpdateServiceRequestWebhookMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnChannelAdd.Method;" })
  webhooksOnChannelAddMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnChannelAdd.Url;" })
  webhooksOnChannelAddUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnChannelAdded.Method;" })
  webhooksOnChannelAddedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnChannelAdded.Url;" })
  webhooksOnChannelAddedUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnChannelDestroy.Method;" })
  webhooksOnChannelDestroyMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnChannelDestroy.Url;" })
  webhooksOnChannelDestroyUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnChannelDestroyed.Method;" })
  webhooksOnChannelDestroyedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnChannelDestroyed.Url;" })
  webhooksOnChannelDestroyedUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnChannelUpdate.Method;" })
  webhooksOnChannelUpdateMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnChannelUpdate.Url;" })
  webhooksOnChannelUpdateUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnChannelUpdated.Method;" })
  webhooksOnChannelUpdatedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnChannelUpdated.Url;" })
  webhooksOnChannelUpdatedUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnMemberAdd.Method;" })
  webhooksOnMemberAddMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnMemberAdd.Url;" })
  webhooksOnMemberAddUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnMemberAdded.Method;" })
  webhooksOnMemberAddedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnMemberAdded.Url;" })
  webhooksOnMemberAddedUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnMemberRemove.Method;" })
  webhooksOnMemberRemoveMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnMemberRemove.Url;" })
  webhooksOnMemberRemoveUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnMemberRemoved.Method;" })
  webhooksOnMemberRemovedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnMemberRemoved.Url;" })
  webhooksOnMemberRemovedUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnMessageRemove.Method;" })
  webhooksOnMessageRemoveMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnMessageRemove.Url;" })
  webhooksOnMessageRemoveUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnMessageRemoved.Method;" })
  webhooksOnMessageRemovedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnMessageRemoved.Url;" })
  webhooksOnMessageRemovedUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnMessageSend.Method;" })
  webhooksOnMessageSendMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnMessageSend.Url;" })
  webhooksOnMessageSendUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnMessageSent.Method;" })
  webhooksOnMessageSentMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnMessageSent.Url;" })
  webhooksOnMessageSentUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnMessageUpdate.Method;" })
  webhooksOnMessageUpdateMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnMessageUpdate.Url;" })
  webhooksOnMessageUpdateUrl?: string;

  @Metadata({ data: "form, name=Webhooks.OnMessageUpdated.Method;" })
  webhooksOnMessageUpdatedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum;

  @Metadata({ data: "form, name=Webhooks.OnMessageUpdated.Url;" })
  webhooksOnMessageUpdatedUrl?: string;
}


export class UpdateServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateServicePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceUpdateServiceRequest;

  @Metadata()
  security: UpdateServiceSecurity;
}


export class UpdateServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ipMessagingV1Service?: shared.IpMessagingV1Service;
}
