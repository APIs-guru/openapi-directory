import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCiscoSwitchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateCiscoSwitchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateCiscoSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCiscoSwitchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CiscoSwitchDataSource;

  @SpeakeasyMetadata()
  security: UpdateCiscoSwitchSecurity;
}


export class UpdateCiscoSwitchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  ciscoSwitchDataSource?: shared.CiscoSwitchDataSource;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
