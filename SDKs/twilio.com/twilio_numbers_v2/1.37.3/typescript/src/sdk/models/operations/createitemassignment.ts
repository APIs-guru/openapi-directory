import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateItemAssignmentServerList = [
	"https://numbers.twilio.com",
] as const;


export class CreateItemAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" })
  bundleSid: string;
}


export class CreateItemAssignmentCreateItemAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ObjectSid;" })
  objectSid: string;
}


export class CreateItemAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateItemAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateItemAssignmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateItemAssignmentCreateItemAssignmentRequest;

  @SpeakeasyMetadata()
  security: CreateItemAssignmentSecurity;
}


export class CreateItemAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  numbersV2RegulatoryComplianceBundleItemAssignment?: shared.NumbersV2RegulatoryComplianceBundleItemAssignment;
}
