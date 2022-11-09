import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDellSwitchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateDellSwitchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateDellSwitchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDellSwitchPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.DellSwitchDataSource;

  @Metadata()
  security: UpdateDellSwitchSecurity;
}


export class UpdateDellSwitchResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  dellSwitchDataSource?: shared.DellSwitchDataSource;

  @Metadata()
  statusCode: number;
}
