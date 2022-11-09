import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateHpvcManagerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateHpvcManagerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateHpvcManagerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateHpvcManagerPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SwitchDataSource;

  @Metadata()
  security: UpdateHpvcManagerSecurity;
}


export class UpdateHpvcManagerResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  switchDataSource?: shared.SwitchDataSource;
}
