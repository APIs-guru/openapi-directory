import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHTRUSTEDCOMMSCPS_SERVERS = [
	"https://preview.twilio.com",
];



export class FetchTrustedCommsCpsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Xcnam-Sensitive-Phone-Number" })
  xXcnamSensitivePhoneNumber?: string;
}


export class FetchTrustedCommsCpsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustedCommsCpsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: FetchTrustedCommsCpsHeaders;

  @Metadata()
  security: FetchTrustedCommsCpsSecurity;
}


export class FetchTrustedCommsCpsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewTrustedCommsCps?: shared.PreviewTrustedCommsCps;
}
