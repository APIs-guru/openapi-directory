import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListServiceOfferingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class ListServiceOfferingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListServiceOfferingsQueryParams;
}


export class ListServiceOfferingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceOfferingsCollection?: shared.ServiceOfferingsCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
