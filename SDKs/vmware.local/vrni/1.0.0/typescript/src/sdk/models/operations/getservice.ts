import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetServiceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetServicePathParams;

  @Metadata()
  queryParams: GetServiceQueryParams;

  @Metadata()
  security: GetServiceSecurity;
}


export class GetServiceResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  baseService?: shared.BaseService;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
