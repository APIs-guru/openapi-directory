import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingsListingIdBumpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listing_id" })
  listingId: string;
}


export class GetListingsListingIdBumpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetListingsListingIdBumpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingsListingIdBumpPathParams;

  @SpeakeasyMetadata()
  security: GetListingsListingIdBumpSecurity;
}


export class GetListingsListingIdBumpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
