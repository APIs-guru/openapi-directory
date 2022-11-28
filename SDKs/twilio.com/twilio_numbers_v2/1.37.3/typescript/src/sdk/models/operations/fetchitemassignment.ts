import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchItemAssignmentServerList = [
	"https://numbers.twilio.com",
] as const;


export class FetchItemAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" })
  bundleSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchItemAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchItemAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchItemAssignmentPathParams;

  @SpeakeasyMetadata()
  security: FetchItemAssignmentSecurity;
}


export class FetchItemAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  numbersV2RegulatoryComplianceBundleItemAssignment?: shared.NumbersV2RegulatoryComplianceBundleItemAssignment;
}
