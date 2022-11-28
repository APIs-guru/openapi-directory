import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateInviteServerList = [
	"https://chat.twilio.com",
] as const;


export class CreateInvitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateInviteCreateInviteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Identity;" })
  identity: string;

  @SpeakeasyMetadata({ data: "form, name=RoleSid;" })
  roleSid?: string;
}


export class CreateInviteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateInviteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateInvitePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateInviteCreateInviteRequest;

  @SpeakeasyMetadata()
  security: CreateInviteSecurity;
}


export class CreateInviteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  chatV1ServiceChannelInvite?: shared.ChatV1ServiceChannelInvite;
}
