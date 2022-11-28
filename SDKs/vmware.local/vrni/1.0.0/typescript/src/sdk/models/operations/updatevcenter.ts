import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateVcenterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateVcenterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateVcenterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateVcenterPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.VCenterDataSource;

  @SpeakeasyMetadata()
  security: UpdateVcenterSecurity;
}


export class UpdateVcenterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vCenterDataSource?: shared.VCenterDataSource;
}
