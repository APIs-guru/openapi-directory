import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECHALLENGE_SERVERS = [
	"https://verify.twilio.com",
];



export class UpdateChallengePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateChallengeUpdateChallengeRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AuthPayload;" })
  authPayload?: string;

  @Metadata({ data: "form, name=Metadata;" })
  metadata?: any;
}


export class UpdateChallengeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateChallengeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateChallengePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateChallengeUpdateChallengeRequest;

  @Metadata()
  security: UpdateChallengeSecurity;
}


export class UpdateChallengeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceEntityChallenge?: shared.VerifyV2ServiceEntityChallenge;
}
