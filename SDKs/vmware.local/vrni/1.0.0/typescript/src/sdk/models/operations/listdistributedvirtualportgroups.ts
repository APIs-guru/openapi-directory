import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDistributedVirtualPortgroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_time" })
  startTime?: number;
}


export class ListDistributedVirtualPortgroupsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListDistributedVirtualPortgroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDistributedVirtualPortgroupsQueryParams;

  @Metadata()
  security: ListDistributedVirtualPortgroupsSecurity;
}


export class ListDistributedVirtualPortgroupsResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  pagedListResponseWithTime?: shared.PagedListResponseWithTime;

  @Metadata()
  statusCode: number;
}
