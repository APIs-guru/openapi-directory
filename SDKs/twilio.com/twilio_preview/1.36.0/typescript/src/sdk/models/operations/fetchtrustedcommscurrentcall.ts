import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHTRUSTEDCOMMSCURRENTCALL_SERVERS = [
	"https://preview.twilio.com",
];



export class FetchTrustedCommsCurrentCallHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Xcnam-Sensitive-Phone-Number-From" })
  xXcnamSensitivePhoneNumberFrom?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Xcnam-Sensitive-Phone-Number-To" })
  xXcnamSensitivePhoneNumberTo?: string;
}


export class FetchTrustedCommsCurrentCallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustedCommsCurrentCallRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: FetchTrustedCommsCurrentCallHeaders;

  @Metadata()
  security: FetchTrustedCommsCurrentCallSecurity;
}


export class FetchTrustedCommsCurrentCallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewTrustedCommsCurrentCall?: shared.PreviewTrustedCommsCurrentCall;
}
