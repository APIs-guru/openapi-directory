import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateServiceServerList = [
	"https://chat.twilio.com",
] as const;


export class UpdateServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateServiceUpdateServiceRequestWebhookMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ConsumptionReportInterval;" })
  consumptionReportInterval?: number;

  @SpeakeasyMetadata({ data: "form, name=DefaultChannelCreatorRoleSid;" })
  defaultChannelCreatorRoleSid?: string;

  @SpeakeasyMetadata({ data: "form, name=DefaultChannelRoleSid;" })
  defaultChannelRoleSid?: string;

  @SpeakeasyMetadata({ data: "form, name=DefaultServiceRoleSid;" })
  defaultServiceRoleSid?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Limits.ChannelMembers;" })
  limitsChannelMembers?: number;

  @SpeakeasyMetadata({ data: "form, name=Limits.UserChannels;" })
  limitsUserChannels?: number;

  @SpeakeasyMetadata({ data: "form, name=Notifications.AddedToChannel.Enabled;" })
  notificationsAddedToChannelEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Notifications.AddedToChannel.Template;" })
  notificationsAddedToChannelTemplate?: string;

  @SpeakeasyMetadata({ data: "form, name=Notifications.InvitedToChannel.Enabled;" })
  notificationsInvitedToChannelEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Notifications.InvitedToChannel.Template;" })
  notificationsInvitedToChannelTemplate?: string;

  @SpeakeasyMetadata({ data: "form, name=Notifications.NewMessage.Enabled;" })
  notificationsNewMessageEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Notifications.NewMessage.Template;" })
  notificationsNewMessageTemplate?: string;

  @SpeakeasyMetadata({ data: "form, name=Notifications.RemovedFromChannel.Enabled;" })
  notificationsRemovedFromChannelEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Notifications.RemovedFromChannel.Template;" })
  notificationsRemovedFromChannelTemplate?: string;

  @SpeakeasyMetadata({ data: "form, name=PostWebhookUrl;" })
  postWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=PreWebhookUrl;" })
  preWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=ReachabilityEnabled;" })
  reachabilityEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=ReadStatusEnabled;" })
  readStatusEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=TypingIndicatorTimeout;" })
  typingIndicatorTimeout?: number;

  @SpeakeasyMetadata({ data: "form, name=WebhookFilters;" })
  webhookFilters?: string[];

  @SpeakeasyMetadata({ data: "form, name=WebhookMethod;" })
  webhookMethod?: UpdateServiceUpdateServiceRequestWebhookMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnChannelAdd.Method;" })
  webhooksOnChannelAddMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnChannelAdd.Url;" })
  webhooksOnChannelAddUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnChannelAdded.Method;" })
  webhooksOnChannelAddedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnChannelAdded.Url;" })
  webhooksOnChannelAddedUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnChannelDestroy.Method;" })
  webhooksOnChannelDestroyMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnChannelDestroy.Url;" })
  webhooksOnChannelDestroyUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnChannelDestroyed.Method;" })
  webhooksOnChannelDestroyedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnChannelDestroyed.Url;" })
  webhooksOnChannelDestroyedUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnChannelUpdate.Method;" })
  webhooksOnChannelUpdateMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnChannelUpdate.Url;" })
  webhooksOnChannelUpdateUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnChannelUpdated.Method;" })
  webhooksOnChannelUpdatedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnChannelUpdated.Url;" })
  webhooksOnChannelUpdatedUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMemberAdd.Method;" })
  webhooksOnMemberAddMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMemberAdd.Url;" })
  webhooksOnMemberAddUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMemberAdded.Method;" })
  webhooksOnMemberAddedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMemberAdded.Url;" })
  webhooksOnMemberAddedUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMemberRemove.Method;" })
  webhooksOnMemberRemoveMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMemberRemove.Url;" })
  webhooksOnMemberRemoveUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMemberRemoved.Method;" })
  webhooksOnMemberRemovedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMemberRemoved.Url;" })
  webhooksOnMemberRemovedUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMessageRemove.Method;" })
  webhooksOnMessageRemoveMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMessageRemove.Url;" })
  webhooksOnMessageRemoveUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMessageRemoved.Method;" })
  webhooksOnMessageRemovedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMessageRemoved.Url;" })
  webhooksOnMessageRemovedUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMessageSend.Method;" })
  webhooksOnMessageSendMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMessageSend.Url;" })
  webhooksOnMessageSendUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMessageSent.Method;" })
  webhooksOnMessageSentMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMessageSent.Url;" })
  webhooksOnMessageSentUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMessageUpdate.Method;" })
  webhooksOnMessageUpdateMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMessageUpdate.Url;" })
  webhooksOnMessageUpdateUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMessageUpdated.Method;" })
  webhooksOnMessageUpdatedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Webhooks.OnMessageUpdated.Url;" })
  webhooksOnMessageUpdatedUrl?: string;
}


export class UpdateServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateServicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceUpdateServiceRequest;

  @SpeakeasyMetadata()
  security: UpdateServiceSecurity;
}


export class UpdateServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  chatV1Service?: shared.ChatV1Service;
}
