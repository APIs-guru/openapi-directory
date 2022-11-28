import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBrocadeSwitchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateBrocadeSwitchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateBrocadeSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBrocadeSwitchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SwitchDataSource;

  @SpeakeasyMetadata()
  security: UpdateBrocadeSwitchSecurity;
}


export class UpdateBrocadeSwitchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  switchDataSource?: shared.SwitchDataSource;
}
