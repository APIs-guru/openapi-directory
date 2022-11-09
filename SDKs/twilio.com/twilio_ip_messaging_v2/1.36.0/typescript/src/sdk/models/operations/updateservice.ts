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

  @Metadata({ data: "form, name=Media.CompatibilityMessage;" })
  mediaCompatibilityMessage?: string;

  @Metadata({ data: "form, name=Notifications.AddedToChannel.Enabled;" })
  notificationsAddedToChannelEnabled?: boolean;

  @Metadata({ data: "form, name=Notifications.AddedToChannel.Sound;" })
  notificationsAddedToChannelSound?: string;

  @Metadata({ data: "form, name=Notifications.AddedToChannel.Template;" })
  notificationsAddedToChannelTemplate?: string;

  @Metadata({ data: "form, name=Notifications.InvitedToChannel.Enabled;" })
  notificationsInvitedToChannelEnabled?: boolean;

  @Metadata({ data: "form, name=Notifications.InvitedToChannel.Sound;" })
  notificationsInvitedToChannelSound?: string;

  @Metadata({ data: "form, name=Notifications.InvitedToChannel.Template;" })
  notificationsInvitedToChannelTemplate?: string;

  @Metadata({ data: "form, name=Notifications.LogEnabled;" })
  notificationsLogEnabled?: boolean;

  @Metadata({ data: "form, name=Notifications.NewMessage.BadgeCountEnabled;" })
  notificationsNewMessageBadgeCountEnabled?: boolean;

  @Metadata({ data: "form, name=Notifications.NewMessage.Enabled;" })
  notificationsNewMessageEnabled?: boolean;

  @Metadata({ data: "form, name=Notifications.NewMessage.Sound;" })
  notificationsNewMessageSound?: string;

  @Metadata({ data: "form, name=Notifications.NewMessage.Template;" })
  notificationsNewMessageTemplate?: string;

  @Metadata({ data: "form, name=Notifications.RemovedFromChannel.Enabled;" })
  notificationsRemovedFromChannelEnabled?: boolean;

  @Metadata({ data: "form, name=Notifications.RemovedFromChannel.Sound;" })
  notificationsRemovedFromChannelSound?: string;

  @Metadata({ data: "form, name=Notifications.RemovedFromChannel.Template;" })
  notificationsRemovedFromChannelTemplate?: string;

  @Metadata({ data: "form, name=PostWebhookRetryCount;" })
  postWebhookRetryCount?: number;

  @Metadata({ data: "form, name=PostWebhookUrl;" })
  postWebhookUrl?: string;

  @Metadata({ data: "form, name=PreWebhookRetryCount;" })
  preWebhookRetryCount?: number;

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
  ipMessagingV2Service?: shared.IpMessagingV2Service;
}
