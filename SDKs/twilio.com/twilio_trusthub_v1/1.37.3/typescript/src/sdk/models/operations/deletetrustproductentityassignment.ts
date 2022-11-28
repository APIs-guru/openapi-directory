import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteTrustProductEntityAssignmentServerList = [
	"https://trusthub.twilio.com",
] as const;


export class DeleteTrustProductEntityAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class DeleteTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteTrustProductEntityAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteTrustProductEntityAssignmentPathParams;

  @SpeakeasyMetadata()
  security: DeleteTrustProductEntityAssignmentSecurity;
}


export class DeleteTrustProductEntityAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
