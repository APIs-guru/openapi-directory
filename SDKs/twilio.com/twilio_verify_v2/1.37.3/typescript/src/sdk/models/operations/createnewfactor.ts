import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateNewFactorServerList = [
	"https://verify.twilio.com",
] as const;


export class CreateNewFactorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateNewFactorCreateNewFactorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Binding.Alg;" })
  bindingAlg?: string;

  @SpeakeasyMetadata({ data: "form, name=Binding.PublicKey;" })
  bindingPublicKey?: string;

  @SpeakeasyMetadata({ data: "form, name=Binding.Secret;" })
  bindingSecret?: string;

  @SpeakeasyMetadata({ data: "form, name=Config.Alg;" })
  configAlg?: shared.NewFactorEnumTotpAlgorithmsEnum;

  @SpeakeasyMetadata({ data: "form, name=Config.AppId;" })
  configAppId?: string;

  @SpeakeasyMetadata({ data: "form, name=Config.CodeLength;" })
  configCodeLength?: number;

  @SpeakeasyMetadata({ data: "form, name=Config.NotificationPlatform;" })
  configNotificationPlatform?: shared.NewFactorEnumNotificationPlatformsEnum;

  @SpeakeasyMetadata({ data: "form, name=Config.NotificationToken;" })
  configNotificationToken?: string;

  @SpeakeasyMetadata({ data: "form, name=Config.SdkVersion;" })
  configSdkVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=Config.Skew;" })
  configSkew?: number;

  @SpeakeasyMetadata({ data: "form, name=Config.TimeStep;" })
  configTimeStep?: number;

  @SpeakeasyMetadata({ data: "form, name=FactorType;" })
  factorType: shared.NewFactorEnumFactorTypesEnum;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=Metadata;" })
  metadata?: any;
}


export class CreateNewFactorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateNewFactorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateNewFactorPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateNewFactorCreateNewFactorRequest;

  @SpeakeasyMetadata()
  security: CreateNewFactorSecurity;
}


export class CreateNewFactorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceEntityNewFactor?: shared.VerifyV2ServiceEntityNewFactor;
}
