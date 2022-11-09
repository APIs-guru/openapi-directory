import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEINTERACTIONCHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
];



export class UpdateInteractionChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateInteractionChannelUpdateInteractionChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Routing;" })
  routing?: any;

  @Metadata({ data: "form, name=Status;" })
  status: shared.InteractionChannelEnumStatusEnum;
}


export class UpdateInteractionChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateInteractionChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateInteractionChannelPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateInteractionChannelUpdateInteractionChannelRequest;

  @Metadata()
  security: UpdateInteractionChannelSecurity;
}


export class UpdateInteractionChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  flexV1InteractionInteractionChannel?: shared.FlexV1InteractionInteractionChannel;
}
