import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyFollowsCollectionsSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class PostMyFollowsCollectionsSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsCollectionsSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyFollowsCollectionsSlugPathParams;

  @Metadata()
  security: PostMyFollowsCollectionsSlugSecurity;
}


export class PostMyFollowsCollectionsSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
