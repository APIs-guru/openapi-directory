import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListServiceInstancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class ListServiceInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListServiceInstancesQueryParams;
}


export class ListServiceInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceInstancesCollection?: shared.ServiceInstancesCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
