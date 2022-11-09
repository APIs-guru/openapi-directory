import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListServiceInventoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class ListServiceInventoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListServiceInventoriesQueryParams;
}


export class ListServiceInventoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceInventoriesCollection?: shared.ServiceInventoriesCollection;

  @Metadata()
  statusCode: number;
}
