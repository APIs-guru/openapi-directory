import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateTrustProductEntityAssignmentServerList = [
	"https://trusthub.twilio.com",
] as const;


export class CreateTrustProductEntityAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ObjectSid;" })
  objectSid: string;
}


export class CreateTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTrustProductEntityAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateTrustProductEntityAssignmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest;

  @SpeakeasyMetadata()
  security: CreateTrustProductEntityAssignmentSecurity;
}


export class CreateTrustProductEntityAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1TrustProductTrustProductEntityAssignment?: shared.TrusthubV1TrustProductTrustProductEntityAssignment;
}
