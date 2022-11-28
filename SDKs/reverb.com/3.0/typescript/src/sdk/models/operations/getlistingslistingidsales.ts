import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetListingsListingIdSalesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listing_id" })
  listingId: string;
}


export class GetListingsListingIdSalesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingsListingIdSalesPathParams;
}


export class GetListingsListingIdSalesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
