import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEMEMBER_SERVERS = [
	"https://ip-messaging.twilio.com",
];



export class CreateMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateMemberHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.MemberEnumWebhookEnabledTypeEnum;
}


export class CreateMemberCreateMemberRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @Metadata({ data: "form, name=DateCreated;" })
  dateCreated?: Date;

  @Metadata({ data: "form, name=DateUpdated;" })
  dateUpdated?: Date;

  @Metadata({ data: "form, name=Identity;" })
  identity: string;

  @Metadata({ data: "form, name=LastConsumedMessageIndex;" })
  lastConsumedMessageIndex?: number;

  @Metadata({ data: "form, name=LastConsumptionTimestamp;" })
  lastConsumptionTimestamp?: Date;

  @Metadata({ data: "form, name=RoleSid;" })
  roleSid?: string;
}


export class CreateMemberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateMemberRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateMemberPathParams;

  @Metadata()
  headers: CreateMemberHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateMemberCreateMemberRequest;

  @Metadata()
  security: CreateMemberSecurity;
}


export class CreateMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ipMessagingV2ServiceChannelMember?: shared.IpMessagingV2ServiceChannelMember;
}
