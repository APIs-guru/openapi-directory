import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateMessagingConfigurationServerList = [
	"https://verify.twilio.com",
] as const;


export class UpdateMessagingConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Country" })
  country: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateMessagingConfigurationUpdateMessagingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid: string;
}


export class UpdateMessagingConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateMessagingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateMessagingConfigurationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateMessagingConfigurationUpdateMessagingConfigurationRequest;

  @SpeakeasyMetadata()
  security: UpdateMessagingConfigurationSecurity;
}


export class UpdateMessagingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceMessagingConfiguration?: shared.VerifyV2ServiceMessagingConfiguration;
}
