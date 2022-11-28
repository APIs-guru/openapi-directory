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

  @SpeakeasyMetadata({ data: "form, name=Media.CompatibilityMessage;" })
  mediaCompatibilityMessage?: string;

  @SpeakeasyMetadata({ data: "form, name=Notifications.AddedToChannel.Enabled;" })
  notificationsAddedToChannelEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Notifications.AddedToChannel.Sound;" })
  notificationsAddedToChannelSound?: string;

  @SpeakeasyMetadata({ data: "form, name=Notifications.AddedToChannel.Template;" })
  notificationsAddedToChannelTemplate?: string;

  @SpeakeasyMetadata({ data: "form, name=Notifications.InvitedToChannel.Enabled;" })
  notificationsInvitedToChannelEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Notifications.InvitedToChannel.Sound;" })
  notificationsInvitedToChannelSound?: string;

  @SpeakeasyMetadata({ data: "form, name=Notifications.InvitedToChannel.Template;" })
  notificationsInvitedToChannelTemplate?: string;

  @SpeakeasyMetadata({ data: "form, name=Notifications.LogEnabled;" })
  notificationsLogEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Notifications.NewMessage.BadgeCountEnabled;" })
  notificationsNewMessageBadgeCountEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Notifications.NewMessage.Enabled;" })
  notificationsNewMessageEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Notifications.NewMessage.Sound;" })
  notificationsNewMessageSound?: string;

  @SpeakeasyMetadata({ data: "form, name=Notifications.NewMessage.Template;" })
  notificationsNewMessageTemplate?: string;

  @SpeakeasyMetadata({ data: "form, name=Notifications.RemovedFromChannel.Enabled;" })
  notificationsRemovedFromChannelEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Notifications.RemovedFromChannel.Sound;" })
  notificationsRemovedFromChannelSound?: string;

  @SpeakeasyMetadata({ data: "form, name=Notifications.RemovedFromChannel.Template;" })
  notificationsRemovedFromChannelTemplate?: string;

  @SpeakeasyMetadata({ data: "form, name=PostWebhookRetryCount;" })
  postWebhookRetryCount?: number;

  @SpeakeasyMetadata({ data: "form, name=PostWebhookUrl;" })
  postWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=PreWebhookRetryCount;" })
  preWebhookRetryCount?: number;

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
  chatV2Service?: shared.ChatV2Service;
}
