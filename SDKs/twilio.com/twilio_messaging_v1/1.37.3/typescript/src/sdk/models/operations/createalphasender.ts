import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateAlphaSenderServerList = [
	"https://messaging.twilio.com",
] as const;


export class CreateAlphaSenderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateAlphaSenderCreateAlphaSenderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AlphaSender;" })
  alphaSender: string;
}


export class CreateAlphaSenderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateAlphaSenderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateAlphaSenderPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateAlphaSenderCreateAlphaSenderRequest;

  @SpeakeasyMetadata()
  security: CreateAlphaSenderSecurity;
}


export class CreateAlphaSenderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  messagingV1ServiceAlphaSender?: shared.MessagingV1ServiceAlphaSender;
}
