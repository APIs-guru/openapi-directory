import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATETRUSTPRODUCTENTITYASSIGNMENT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class CreateTrustProductEntityAssignmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ObjectSid;" })
  objectSid: string;
}


export class CreateTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTrustProductEntityAssignmentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateTrustProductEntityAssignmentPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest;

  @Metadata()
  security: CreateTrustProductEntityAssignmentSecurity;
}


export class CreateTrustProductEntityAssignmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1TrustProductTrustProductEntityAssignment?: shared.TrusthubV1TrustProductTrustProductEntityAssignment;
}
