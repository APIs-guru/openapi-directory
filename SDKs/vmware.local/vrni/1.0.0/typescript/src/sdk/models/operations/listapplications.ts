import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListApplicationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_time" })
  startTime?: number;
}


export class ListApplicationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListApplicationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListApplicationsQueryParams;

  @Metadata()
  security: ListApplicationsSecurity;
}


export class ListApplicationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pagedListResponse?: shared.PagedListResponse;

  @Metadata()
  statusCode: number;
}
