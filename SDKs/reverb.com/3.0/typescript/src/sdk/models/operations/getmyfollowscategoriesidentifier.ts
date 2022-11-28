import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyFollowsCategoriesIdentifierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identifier" })
  identifier: string;
}


export class GetMyFollowsCategoriesIdentifierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyFollowsCategoriesIdentifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyFollowsCategoriesIdentifierPathParams;

  @SpeakeasyMetadata()
  security: GetMyFollowsCategoriesIdentifierSecurity;
}


export class GetMyFollowsCategoriesIdentifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
