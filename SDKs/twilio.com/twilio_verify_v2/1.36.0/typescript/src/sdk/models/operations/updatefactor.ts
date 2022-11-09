import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEFACTOR_SERVERS = [
	"https://verify.twilio.com",
];



export class UpdateFactorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateFactorUpdateFactorRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AuthPayload;" })
  authPayload?: string;

  @Metadata({ data: "form, name=Config.Alg;" })
  configAlg?: shared.FactorEnumTotpAlgorithmsEnum;

  @Metadata({ data: "form, name=Config.CodeLength;" })
  configCodeLength?: number;

  @Metadata({ data: "form, name=Config.NotificationPlatform;" })
  configNotificationPlatform?: string;

  @Metadata({ data: "form, name=Config.NotificationToken;" })
  configNotificationToken?: string;

  @Metadata({ data: "form, name=Config.SdkVersion;" })
  configSdkVersion?: string;

  @Metadata({ data: "form, name=Config.Skew;" })
  configSkew?: number;

  @Metadata({ data: "form, name=Config.TimeStep;" })
  configTimeStep?: number;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateFactorSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateFactorRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateFactorPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateFactorUpdateFactorRequest;

  @Metadata()
  security: UpdateFactorSecurity;
}


export class UpdateFactorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceEntityFactor?: shared.VerifyV2ServiceEntityFactor;
}
