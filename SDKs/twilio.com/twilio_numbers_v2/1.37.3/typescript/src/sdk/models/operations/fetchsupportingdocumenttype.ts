import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchSupportingDocumentTypeServerList = [
	"https://numbers.twilio.com",
] as const;


export class FetchSupportingDocumentTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchSupportingDocumentTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSupportingDocumentTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchSupportingDocumentTypePathParams;

  @SpeakeasyMetadata()
  security: FetchSupportingDocumentTypeSecurity;
}


export class FetchSupportingDocumentTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  numbersV2RegulatoryComplianceSupportingDocumentType?: shared.NumbersV2RegulatoryComplianceSupportingDocumentType;
}
