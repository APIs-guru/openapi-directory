import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHCONFIGURATION_SERVERS = [
	"https://flex-api.twilio.com",
];



export class FetchConfigurationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=UiVersion" })
  uiVersion?: string;
}


export class FetchConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: FetchConfigurationQueryParams;

  @Metadata()
  security: FetchConfigurationSecurity;
}


export class FetchConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  flexV1Configuration?: shared.FlexV1Configuration;
}
