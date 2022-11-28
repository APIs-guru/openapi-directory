import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteMyFollowsCategoriesIdentifierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identifier" })
  identifier: string;
}


export class DeleteMyFollowsCategoriesIdentifierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyFollowsCategoriesIdentifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMyFollowsCategoriesIdentifierPathParams;

  @SpeakeasyMetadata()
  security: DeleteMyFollowsCategoriesIdentifierSecurity;
}


export class DeleteMyFollowsCategoriesIdentifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
