import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListServiceOfferingServiceOfferingNodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ListServiceOfferingServiceOfferingNodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class ListServiceOfferingServiceOfferingNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListServiceOfferingServiceOfferingNodesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListServiceOfferingServiceOfferingNodesQueryParams;
}


export class ListServiceOfferingServiceOfferingNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  serviceOfferingNodesCollection?: shared.ServiceOfferingNodesCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
