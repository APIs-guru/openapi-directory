import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteListingsListingIdImagesImageIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=image_id" })
  imageId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listing_id" })
  listingId: string;
}


export class DeleteListingsListingIdImagesImageIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteListingsListingIdImagesImageIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteListingsListingIdImagesImageIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteListingsListingIdImagesImageIdSecurity;
}


export class DeleteListingsListingIdImagesImageIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
