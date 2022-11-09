import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHTRUSTEDCOMMSBRANDSINFORMATION_SERVERS = [
	"https://preview.twilio.com",
];



export class FetchTrustedCommsBrandsInformationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class FetchTrustedCommsBrandsInformationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustedCommsBrandsInformationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: FetchTrustedCommsBrandsInformationHeaders;

  @Metadata()
  security: FetchTrustedCommsBrandsInformationSecurity;
}


export class FetchTrustedCommsBrandsInformationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewTrustedCommsBrandsInformation?: shared.PreviewTrustedCommsBrandsInformation;
}
