import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListWorkweekConfigsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class ListWorkweekConfigsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListWorkweekConfigsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListWorkweekConfigsQueryParams;

  @Metadata()
  security: ListWorkweekConfigsSecurity;
}


export class ListWorkweekConfigsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWorkweekConfigsResponse?: shared.ListWorkweekConfigsResponse;

  @Metadata()
  statusCode: number;
}
