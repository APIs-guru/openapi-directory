import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateMessagingConfigurationServerList = [
	"https://verify.twilio.com",
] as const;


export class CreateMessagingConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateMessagingConfigurationCreateMessagingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Country;" })
  country: string;

  @SpeakeasyMetadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid: string;
}


export class CreateMessagingConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateMessagingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateMessagingConfigurationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateMessagingConfigurationCreateMessagingConfigurationRequest;

  @SpeakeasyMetadata()
  security: CreateMessagingConfigurationSecurity;
}


export class CreateMessagingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceMessagingConfiguration?: shared.VerifyV2ServiceMessagingConfiguration;
}
