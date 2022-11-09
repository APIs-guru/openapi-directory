import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCiscoSwitchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateCiscoSwitchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateCiscoSwitchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCiscoSwitchPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CiscoSwitchDataSource;

  @Metadata()
  security: UpdateCiscoSwitchSecurity;
}


export class UpdateCiscoSwitchResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  ciscoSwitchDataSource?: shared.CiscoSwitchDataSource;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
