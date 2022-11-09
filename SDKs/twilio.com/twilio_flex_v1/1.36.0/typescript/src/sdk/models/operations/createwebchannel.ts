import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEWEBCHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
];



export class CreateWebChannelCreateWebChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ChatFriendlyName;" })
  chatFriendlyName: string;

  @Metadata({ data: "form, name=ChatUniqueName;" })
  chatUniqueName?: string;

  @Metadata({ data: "form, name=CustomerFriendlyName;" })
  customerFriendlyName: string;

  @Metadata({ data: "form, name=FlexFlowSid;" })
  flexFlowSid: string;

  @Metadata({ data: "form, name=Identity;" })
  identity: string;

  @Metadata({ data: "form, name=PreEngagementData;" })
  preEngagementData?: string;
}


export class CreateWebChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWebChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWebChannelCreateWebChannelRequest;

  @Metadata()
  security: CreateWebChannelSecurity;
}


export class CreateWebChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  flexV1WebChannel?: shared.FlexV1WebChannel;
}
