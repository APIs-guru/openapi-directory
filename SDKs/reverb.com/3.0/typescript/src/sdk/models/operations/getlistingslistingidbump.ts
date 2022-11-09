import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingsListingIdBumpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=listing_id" })
  listingId: string;
}


export class GetListingsListingIdBumpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetListingsListingIdBumpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingsListingIdBumpPathParams;

  @Metadata()
  security: GetListingsListingIdBumpSecurity;
}


export class GetListingsListingIdBumpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
