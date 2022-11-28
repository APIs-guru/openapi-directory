import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyFollowsCategoriesIdentifierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identifier" })
  identifier: string;
}


export class PostMyFollowsCategoriesIdentifierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsCategoriesIdentifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyFollowsCategoriesIdentifierPathParams;

  @SpeakeasyMetadata()
  security: PostMyFollowsCategoriesIdentifierSecurity;
}


export class PostMyFollowsCategoriesIdentifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
