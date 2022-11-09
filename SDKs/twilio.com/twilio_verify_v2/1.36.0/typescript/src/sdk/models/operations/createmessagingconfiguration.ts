import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEMESSAGINGCONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateMessagingConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateMessagingConfigurationCreateMessagingConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Country;" })
  country: string;

  @Metadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid: string;
}


export class CreateMessagingConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateMessagingConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateMessagingConfigurationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateMessagingConfigurationCreateMessagingConfigurationRequest;

  @Metadata()
  security: CreateMessagingConfigurationSecurity;
}


export class CreateMessagingConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceMessagingConfiguration?: shared.VerifyV2ServiceMessagingConfiguration;
}
