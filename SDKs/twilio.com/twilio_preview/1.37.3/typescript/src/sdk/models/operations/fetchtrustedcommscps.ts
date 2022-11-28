import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchTrustedCommsCpsServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchTrustedCommsCpsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Xcnam-Sensitive-Phone-Number" })
  xXcnamSensitivePhoneNumber?: string;
}


export class FetchTrustedCommsCpsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustedCommsCpsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  headers: FetchTrustedCommsCpsHeaders;

  @SpeakeasyMetadata()
  security: FetchTrustedCommsCpsSecurity;
}


export class FetchTrustedCommsCpsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewTrustedCommsCps?: shared.PreviewTrustedCommsCps;
}
