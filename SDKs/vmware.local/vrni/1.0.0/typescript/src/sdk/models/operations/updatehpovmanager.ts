import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateHpovManagerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateHpovManagerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateHpovManagerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateHpovManagerPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SwitchDataSource;

  @Metadata()
  security: UpdateHpovManagerSecurity;
}


export class UpdateHpovManagerResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  switchDataSource?: shared.SwitchDataSource;
}
