import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateChallengeServerList = [
	"https://verify.twilio.com",
] as const;


export class CreateChallengePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateChallengeCreateChallengeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AuthPayload;" })
  authPayload?: string;

  @SpeakeasyMetadata({ data: "form, name=Details.Fields;" })
  detailsFields?: any[];

  @SpeakeasyMetadata({ data: "form, name=Details.Message;" })
  detailsMessage?: string;

  @SpeakeasyMetadata({ data: "form, name=ExpirationDate;" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "form, name=FactorSid;" })
  factorSid: string;

  @SpeakeasyMetadata({ data: "form, name=HiddenDetails;" })
  hiddenDetails?: any;
}


export class CreateChallengeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateChallengeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateChallengePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateChallengeCreateChallengeRequest;

  @SpeakeasyMetadata()
  security: CreateChallengeSecurity;
}


export class CreateChallengeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceEntityChallenge?: shared.VerifyV2ServiceEntityChallenge;
}
