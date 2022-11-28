import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateChallengeServerList = [
	"https://verify.twilio.com",
] as const;


export class UpdateChallengePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateChallengeUpdateChallengeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AuthPayload;" })
  authPayload?: string;

  @SpeakeasyMetadata({ data: "form, name=Metadata;" })
  metadata?: any;
}


export class UpdateChallengeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateChallengeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateChallengePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateChallengeUpdateChallengeRequest;

  @SpeakeasyMetadata()
  security: UpdateChallengeSecurity;
}


export class UpdateChallengeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceEntityChallenge?: shared.VerifyV2ServiceEntityChallenge;
}
