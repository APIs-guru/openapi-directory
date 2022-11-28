import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateInteractionServerList = [
	"https://flex-api.twilio.com",
] as const;


export class CreateInteractionCreateInteractionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Channel;" })
  channel: any;

  @SpeakeasyMetadata({ data: "form, name=Routing;" })
  routing: any;
}


export class CreateInteractionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateInteractionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateInteractionCreateInteractionRequest;

  @SpeakeasyMetadata()
  security: CreateInteractionSecurity;
}


export class CreateInteractionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  flexV1Interaction?: shared.FlexV1Interaction;
}
