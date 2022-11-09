import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetServiceGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetServiceGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetServiceGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetServiceGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetServiceGroupPathParams;

  @Metadata()
  queryParams: GetServiceGroupQueryParams;

  @Metadata()
  security: GetServiceGroupSecurity;
}


export class GetServiceGroupResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  group?: shared.Group;

  @Metadata()
  statusCode: number;
}
