import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFlowsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_time" })
  startTime?: number;
}


export class GetFlowsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetFlowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFlowsQueryParams;

  @SpeakeasyMetadata()
  security: GetFlowsSecurity;
}


export class GetFlowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pagedListResponseWithTime?: shared.PagedListResponseWithTime;

  @SpeakeasyMetadata()
  statusCode: number;
}
