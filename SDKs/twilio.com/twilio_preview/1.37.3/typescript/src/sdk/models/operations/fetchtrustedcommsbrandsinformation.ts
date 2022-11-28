import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchTrustedCommsBrandsInformationServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchTrustedCommsBrandsInformationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class FetchTrustedCommsBrandsInformationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrustedCommsBrandsInformationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  headers: FetchTrustedCommsBrandsInformationHeaders;

  @SpeakeasyMetadata()
  security: FetchTrustedCommsBrandsInformationSecurity;
}


export class FetchTrustedCommsBrandsInformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewTrustedCommsBrandsInformation?: shared.PreviewTrustedCommsBrandsInformation;
}
