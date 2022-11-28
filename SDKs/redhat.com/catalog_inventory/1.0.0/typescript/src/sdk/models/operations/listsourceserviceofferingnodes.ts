import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListSourceServiceOfferingNodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ListSourceServiceOfferingNodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class ListSourceServiceOfferingNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListSourceServiceOfferingNodesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSourceServiceOfferingNodesQueryParams;
}


export class ListSourceServiceOfferingNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  serviceOfferingNodesCollection?: shared.ServiceOfferingNodesCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
