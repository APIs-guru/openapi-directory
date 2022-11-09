import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteMyWishlistIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteMyWishlistIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyWishlistIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMyWishlistIdPathParams;

  @Metadata()
  security: DeleteMyWishlistIdSecurity;
}


export class DeleteMyWishlistIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
