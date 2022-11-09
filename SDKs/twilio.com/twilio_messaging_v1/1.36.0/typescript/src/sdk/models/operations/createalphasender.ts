import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEALPHASENDER_SERVERS = [
	"https://messaging.twilio.com",
];



export class CreateAlphaSenderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateAlphaSenderCreateAlphaSenderRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AlphaSender;" })
  alphaSender: string;
}


export class CreateAlphaSenderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateAlphaSenderRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateAlphaSenderPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateAlphaSenderCreateAlphaSenderRequest;

  @Metadata()
  security: CreateAlphaSenderSecurity;
}


export class CreateAlphaSenderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1ServiceAlphaSender?: shared.MessagingV1ServiceAlphaSender;
}
