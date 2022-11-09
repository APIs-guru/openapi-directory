import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSourceServiceOfferingNodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ListSourceServiceOfferingNodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class ListSourceServiceOfferingNodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListSourceServiceOfferingNodesPathParams;

  @Metadata()
  queryParams: ListSourceServiceOfferingNodesQueryParams;
}


export class ListSourceServiceOfferingNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  serviceOfferingNodesCollection?: shared.ServiceOfferingNodesCollection;

  @Metadata()
  statusCode: number;
}
