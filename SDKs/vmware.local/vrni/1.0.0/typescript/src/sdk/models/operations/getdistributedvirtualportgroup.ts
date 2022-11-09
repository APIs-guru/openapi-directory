import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistributedVirtualPortgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistributedVirtualPortgroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetDistributedVirtualPortgroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetDistributedVirtualPortgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistributedVirtualPortgroupPathParams;

  @Metadata()
  queryParams: GetDistributedVirtualPortgroupQueryParams;

  @Metadata()
  security: GetDistributedVirtualPortgroupSecurity;
}


export class GetDistributedVirtualPortgroupResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  distributedVirtualPortgroup?: shared.DistributedVirtualPortgroup;

  @Metadata()
  statusCode: number;
}
