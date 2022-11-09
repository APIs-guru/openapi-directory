import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEMESSAGINGCONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
];



export class UpdateMessagingConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Country" })
  country: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class UpdateMessagingConfigurationUpdateMessagingConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid: string;
}


export class UpdateMessagingConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateMessagingConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateMessagingConfigurationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateMessagingConfigurationUpdateMessagingConfigurationRequest;

  @Metadata()
  security: UpdateMessagingConfigurationSecurity;
}


export class UpdateMessagingConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceMessagingConfiguration?: shared.VerifyV2ServiceMessagingConfiguration;
}
