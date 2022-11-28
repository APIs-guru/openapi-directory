import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListServiceOfferingServiceInstancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ListServiceOfferingServiceInstancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class ListServiceOfferingServiceInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListServiceOfferingServiceInstancesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListServiceOfferingServiceInstancesQueryParams;
}


export class ListServiceOfferingServiceInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  serviceInstancesCollection?: shared.ServiceInstancesCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
