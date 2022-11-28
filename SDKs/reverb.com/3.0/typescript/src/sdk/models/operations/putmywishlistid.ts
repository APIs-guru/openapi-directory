import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutMyWishlistIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutMyWishlistIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutMyWishlistIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutMyWishlistIdPathParams;

  @SpeakeasyMetadata()
  security: PutMyWishlistIdSecurity;
}


export class PutMyWishlistIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
