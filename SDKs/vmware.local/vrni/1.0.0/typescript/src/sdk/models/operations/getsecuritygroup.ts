import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSecurityGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSecurityGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetSecurityGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetSecurityGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSecurityGroupPathParams;

  @Metadata()
  queryParams: GetSecurityGroupQueryParams;

  @Metadata()
  security: GetSecurityGroupSecurity;
}


export class GetSecurityGroupResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  baseSecurityGroup?: shared.BaseSecurityGroup;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
