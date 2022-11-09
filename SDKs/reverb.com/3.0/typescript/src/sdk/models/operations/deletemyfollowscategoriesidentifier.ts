import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteMyFollowsCategoriesIdentifierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=identifier" })
  identifier: string;
}


export class DeleteMyFollowsCategoriesIdentifierSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyFollowsCategoriesIdentifierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMyFollowsCategoriesIdentifierPathParams;

  @Metadata()
  security: DeleteMyFollowsCategoriesIdentifierSecurity;
}


export class DeleteMyFollowsCategoriesIdentifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
