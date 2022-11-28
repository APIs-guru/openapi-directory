import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchTrustedCommsCurrentCallServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchTrustedCommsCurrentCallHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Xcnam-Sensitive-Phone-Number-From" })
  xXcnamSensitivePhoneNumberFrom?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Xcnam-Sensitive-Phone-Number-To" })
  xXcnamSensitivePhoneNumberTo?: string;
}


export class FetchTrustedCommsCurrentCallSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustedCommsCurrentCallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  headers: FetchTrustedCommsCurrentCallHeaders;

  @SpeakeasyMetadata()
  security: FetchTrustedCommsCurrentCallSecurity;
}


export class FetchTrustedCommsCurrentCallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewTrustedCommsCurrentCall?: shared.PreviewTrustedCommsCurrentCall;
}
