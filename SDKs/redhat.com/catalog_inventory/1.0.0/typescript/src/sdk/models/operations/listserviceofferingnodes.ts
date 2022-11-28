import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListServiceOfferingNodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class ListServiceOfferingNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListServiceOfferingNodesQueryParams;
}


export class ListServiceOfferingNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceOfferingNodesCollection?: shared.ServiceOfferingNodesCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
