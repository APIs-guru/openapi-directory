import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyFollowsCategoriesUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class PostMyFollowsCategoriesUuidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsCategoriesUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyFollowsCategoriesUuidPathParams;

  @Metadata()
  security: PostMyFollowsCategoriesUuidSecurity;
}


export class PostMyFollowsCategoriesUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
