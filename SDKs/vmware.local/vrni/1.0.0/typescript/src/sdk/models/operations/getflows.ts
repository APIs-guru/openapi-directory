import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFlowsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_time" })
  startTime?: number;
}


export class GetFlowsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFlowsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFlowsQueryParams;

  @Metadata()
  security: GetFlowsSecurity;
}


export class GetFlowsResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  pagedListResponseWithTime?: shared.PagedListResponseWithTime;

  @Metadata()
  statusCode: number;
}
