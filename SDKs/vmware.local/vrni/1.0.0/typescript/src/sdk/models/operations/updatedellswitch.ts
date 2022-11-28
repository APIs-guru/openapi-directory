import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDellSwitchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateDellSwitchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateDellSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDellSwitchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.DellSwitchDataSource;

  @SpeakeasyMetadata()
  security: UpdateDellSwitchSecurity;
}


export class UpdateDellSwitchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dellSwitchDataSource?: shared.DellSwitchDataSource;

  @SpeakeasyMetadata()
  statusCode: number;
}
