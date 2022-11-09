import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHINTERACTIONCHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
];



export class FetchInteractionChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchInteractionChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchInteractionChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchInteractionChannelPathParams;

  @Metadata()
  security: FetchInteractionChannelSecurity;
}


export class FetchInteractionChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  flexV1InteractionInteractionChannel?: shared.FlexV1InteractionInteractionChannel;
}
