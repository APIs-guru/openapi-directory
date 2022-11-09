import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEINTERACTION_SERVERS = [
	"https://flex-api.twilio.com",
];



export class CreateInteractionCreateInteractionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Channel;" })
  channel: any;

  @Metadata({ data: "form, name=Routing;" })
  routing: any;
}


export class CreateInteractionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateInteractionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateInteractionCreateInteractionRequest;

  @Metadata()
  security: CreateInteractionSecurity;
}


export class CreateInteractionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  flexV1Interaction?: shared.FlexV1Interaction;
}
