import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteListingsListingIdImagesImageIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=image_id" })
  imageId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=listing_id" })
  listingId: string;
}


export class DeleteListingsListingIdImagesImageIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteListingsListingIdImagesImageIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteListingsListingIdImagesImageIdPathParams;

  @Metadata()
  security: DeleteListingsListingIdImagesImageIdSecurity;
}


export class DeleteListingsListingIdImagesImageIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
