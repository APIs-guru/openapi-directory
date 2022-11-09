import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVcenterManagerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVcenterManagerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetVcenterManagerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetVcenterManagerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVcenterManagerPathParams;

  @Metadata()
  queryParams: GetVcenterManagerQueryParams;

  @Metadata()
  security: GetVcenterManagerSecurity;
}


export class GetVcenterManagerResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vCenterManager?: shared.VCenterManager;
}
