import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListServicePlansQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class ListServicePlansRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListServicePlansQueryParams;
}


export class ListServicePlansResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  servicePlansCollection?: shared.ServicePlansCollection;

  @Metadata()
  statusCode: number;
}
