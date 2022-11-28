import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistributedVirtualPortgroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistributedVirtualPortgroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetDistributedVirtualPortgroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetDistributedVirtualPortgroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistributedVirtualPortgroupPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDistributedVirtualPortgroupQueryParams;

  @SpeakeasyMetadata()
  security: GetDistributedVirtualPortgroupSecurity;
}


export class GetDistributedVirtualPortgroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  distributedVirtualPortgroup?: shared.DistributedVirtualPortgroup;

  @SpeakeasyMetadata()
  statusCode: number;
}
