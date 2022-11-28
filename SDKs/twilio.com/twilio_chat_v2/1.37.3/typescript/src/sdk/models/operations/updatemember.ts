import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateMemberServerList = [
	"https://chat.twilio.com",
] as const;


export class UpdateMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateMemberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.MemberEnumWebhookEnabledTypeEnum;
}


export class UpdateMemberUpdateMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "form, name=DateCreated;" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "form, name=DateUpdated;" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "form, name=LastConsumedMessageIndex;" })
  lastConsumedMessageIndex?: number;

  @SpeakeasyMetadata({ data: "form, name=LastConsumptionTimestamp;" })
  lastConsumptionTimestamp?: Date;

  @SpeakeasyMetadata({ data: "form, name=RoleSid;" })
  roleSid?: string;
}


export class UpdateMemberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateMemberPathParams;

  @SpeakeasyMetadata()
  headers: UpdateMemberHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateMemberUpdateMemberRequest;

  @SpeakeasyMetadata()
  security: UpdateMemberSecurity;
}


export class UpdateMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  chatV2ServiceChannelMember?: shared.ChatV2ServiceChannelMember;
}
