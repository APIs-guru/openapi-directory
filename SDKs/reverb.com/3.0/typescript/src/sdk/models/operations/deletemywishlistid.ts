import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteMyWishlistIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteMyWishlistIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyWishlistIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMyWishlistIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteMyWishlistIdSecurity;
}


export class DeleteMyWishlistIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
