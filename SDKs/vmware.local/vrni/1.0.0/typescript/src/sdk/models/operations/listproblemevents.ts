import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListProblemEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_time" })
  startTime?: number;
}


export class ListProblemEventsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListProblemEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListProblemEventsQueryParams;

  @Metadata()
  security: ListProblemEventsSecurity;
}


export class ListProblemEventsResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  pagedListResponseWithTime?: shared.PagedListResponseWithTime;

  @Metadata()
  statusCode: number;
}
