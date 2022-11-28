import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchMessagingConfigurationServerList = [
	"https://verify.twilio.com",
] as const;


export class FetchMessagingConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Country" })
  country: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class FetchMessagingConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchMessagingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchMessagingConfigurationPathParams;

  @SpeakeasyMetadata()
  security: FetchMessagingConfigurationSecurity;
}


export class FetchMessagingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceMessagingConfiguration?: shared.VerifyV2ServiceMessagingConfiguration;
}
