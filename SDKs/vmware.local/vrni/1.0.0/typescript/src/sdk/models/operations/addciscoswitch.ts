import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddCiscoSwitchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class AddCiscoSwitchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CiscoSwitchDataSourceRequest;

  @Metadata()
  security: AddCiscoSwitchSecurity;
}


export class AddCiscoSwitchResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  ciscoSwitchDataSource?: shared.CiscoSwitchDataSource;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
