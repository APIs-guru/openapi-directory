import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATENEWFACTOR_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateNewFactorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateNewFactorCreateNewFactorRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Binding.Alg;" })
  bindingAlg?: string;

  @Metadata({ data: "form, name=Binding.PublicKey;" })
  bindingPublicKey?: string;

  @Metadata({ data: "form, name=Binding.Secret;" })
  bindingSecret?: string;

  @Metadata({ data: "form, name=Config.Alg;" })
  configAlg?: shared.NewFactorEnumTotpAlgorithmsEnum;

  @Metadata({ data: "form, name=Config.AppId;" })
  configAppId?: string;

  @Metadata({ data: "form, name=Config.CodeLength;" })
  configCodeLength?: number;

  @Metadata({ data: "form, name=Config.NotificationPlatform;" })
  configNotificationPlatform?: shared.NewFactorEnumNotificationPlatformsEnum;

  @Metadata({ data: "form, name=Config.NotificationToken;" })
  configNotificationToken?: string;

  @Metadata({ data: "form, name=Config.SdkVersion;" })
  configSdkVersion?: string;

  @Metadata({ data: "form, name=Config.Skew;" })
  configSkew?: number;

  @Metadata({ data: "form, name=Config.TimeStep;" })
  configTimeStep?: number;

  @Metadata({ data: "form, name=FactorType;" })
  factorType: shared.NewFactorEnumFactorTypesEnum;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=Metadata;" })
  metadata?: any;
}


export class CreateNewFactorSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateNewFactorRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateNewFactorPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateNewFactorCreateNewFactorRequest;

  @Metadata()
  security: CreateNewFactorSecurity;
}


export class CreateNewFactorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceEntityNewFactor?: shared.VerifyV2ServiceEntityNewFactor;
}
