import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateFactorServerList = [
	"https://verify.twilio.com",
] as const;


export class UpdateFactorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateFactorUpdateFactorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AuthPayload;" })
  authPayload?: string;

  @SpeakeasyMetadata({ data: "form, name=Config.Alg;" })
  configAlg?: shared.FactorEnumTotpAlgorithmsEnum;

  @SpeakeasyMetadata({ data: "form, name=Config.CodeLength;" })
  configCodeLength?: number;

  @SpeakeasyMetadata({ data: "form, name=Config.NotificationPlatform;" })
  configNotificationPlatform?: string;

  @SpeakeasyMetadata({ data: "form, name=Config.NotificationToken;" })
  configNotificationToken?: string;

  @SpeakeasyMetadata({ data: "form, name=Config.SdkVersion;" })
  configSdkVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=Config.Skew;" })
  configSkew?: number;

  @SpeakeasyMetadata({ data: "form, name=Config.TimeStep;" })
  configTimeStep?: number;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateFactorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateFactorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateFactorPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateFactorUpdateFactorRequest;

  @SpeakeasyMetadata()
  security: UpdateFactorSecurity;
}


export class UpdateFactorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceEntityFactor?: shared.VerifyV2ServiceEntityFactor;
}
