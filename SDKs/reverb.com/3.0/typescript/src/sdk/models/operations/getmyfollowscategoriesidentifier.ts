import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyFollowsCategoriesIdentifierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=identifier" })
  identifier: string;
}


export class GetMyFollowsCategoriesIdentifierSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyFollowsCategoriesIdentifierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyFollowsCategoriesIdentifierPathParams;

  @Metadata()
  security: GetMyFollowsCategoriesIdentifierSecurity;
}


export class GetMyFollowsCategoriesIdentifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
