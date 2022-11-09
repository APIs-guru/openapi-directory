import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetListingsListingIdSalesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=listing_id" })
  listingId: string;
}


export class GetListingsListingIdSalesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingsListingIdSalesPathParams;
}


export class GetListingsListingIdSalesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
