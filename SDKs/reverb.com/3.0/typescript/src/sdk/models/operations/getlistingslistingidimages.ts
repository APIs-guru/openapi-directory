import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingsListingIdImagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listing_id" })
  listingId: string;
}


export class GetListingsListingIdImagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetListingsListingIdImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingsListingIdImagesPathParams;

  @SpeakeasyMetadata()
  security: GetListingsListingIdImagesSecurity;
}


export class GetListingsListingIdImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
