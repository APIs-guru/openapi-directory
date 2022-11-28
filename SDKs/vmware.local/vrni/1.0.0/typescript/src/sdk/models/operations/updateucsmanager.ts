import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUcsManagerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateUcsManagerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateUcsManagerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUcsManagerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SwitchDataSource;

  @SpeakeasyMetadata()
  security: UpdateUcsManagerSecurity;
}


export class UpdateUcsManagerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  switchDataSource?: shared.SwitchDataSource;
}
