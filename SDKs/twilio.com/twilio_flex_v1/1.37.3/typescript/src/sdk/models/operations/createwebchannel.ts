import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateWebChannelServerList = [
	"https://flex-api.twilio.com",
] as const;


export class CreateWebChannelCreateWebChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ChatFriendlyName;" })
  chatFriendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=ChatUniqueName;" })
  chatUniqueName?: string;

  @SpeakeasyMetadata({ data: "form, name=CustomerFriendlyName;" })
  customerFriendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=FlexFlowSid;" })
  flexFlowSid: string;

  @SpeakeasyMetadata({ data: "form, name=Identity;" })
  identity: string;

  @SpeakeasyMetadata({ data: "form, name=PreEngagementData;" })
  preEngagementData?: string;
}


export class CreateWebChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWebChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWebChannelCreateWebChannelRequest;

  @SpeakeasyMetadata()
  security: CreateWebChannelSecurity;
}


export class CreateWebChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  flexV1WebChannel?: shared.FlexV1WebChannel;
}
