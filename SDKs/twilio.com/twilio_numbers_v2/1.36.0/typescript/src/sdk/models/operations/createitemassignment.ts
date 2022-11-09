import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEITEMASSIGNMENT_SERVERS = [
	"https://numbers.twilio.com",
];



export class CreateItemAssignmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" })
  bundleSid: string;
}


export class CreateItemAssignmentCreateItemAssignmentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ObjectSid;" })
  objectSid: string;
}


export class CreateItemAssignmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateItemAssignmentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateItemAssignmentPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateItemAssignmentCreateItemAssignmentRequest;

  @Metadata()
  security: CreateItemAssignmentSecurity;
}


export class CreateItemAssignmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  numbersV2RegulatoryComplianceBundleItemAssignment?: shared.NumbersV2RegulatoryComplianceBundleItemAssignment;
}
