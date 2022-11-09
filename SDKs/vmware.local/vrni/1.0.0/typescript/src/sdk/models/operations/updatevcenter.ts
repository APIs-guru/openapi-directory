import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateVcenterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateVcenterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateVcenterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateVcenterPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.VCenterDataSource;

  @Metadata()
  security: UpdateVcenterSecurity;
}


export class UpdateVcenterResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vCenterDataSource?: shared.VCenterDataSource;
}
