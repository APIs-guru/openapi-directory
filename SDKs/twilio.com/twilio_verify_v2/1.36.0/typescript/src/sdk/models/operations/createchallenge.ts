import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECHALLENGE_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateChallengePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateChallengeCreateChallengeRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AuthPayload;" })
  authPayload?: string;

  @Metadata({ data: "form, name=Details.Fields;" })
  detailsFields?: any[];

  @Metadata({ data: "form, name=Details.Message;" })
  detailsMessage?: string;

  @Metadata({ data: "form, name=ExpirationDate;" })
  expirationDate?: Date;

  @Metadata({ data: "form, name=FactorSid;" })
  factorSid: string;

  @Metadata({ data: "form, name=HiddenDetails;" })
  hiddenDetails?: any;
}


export class CreateChallengeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateChallengeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateChallengePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateChallengeCreateChallengeRequest;

  @Metadata()
  security: CreateChallengeSecurity;
}


export class CreateChallengeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceEntityChallenge?: shared.VerifyV2ServiceEntityChallenge;
}
