import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDistributedVirtualSwitchesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_time" })
  startTime?: number;
}


export class ListDistributedVirtualSwitchesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListDistributedVirtualSwitchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListDistributedVirtualSwitchesQueryParams;

  @SpeakeasyMetadata()
  security: ListDistributedVirtualSwitchesSecurity;
}


export class ListDistributedVirtualSwitchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pagedListResponseWithTime?: shared.PagedListResponseWithTime;

  @SpeakeasyMetadata()
  statusCode: number;
}
