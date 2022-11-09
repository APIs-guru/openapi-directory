import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyFollowsArticlesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=category_uuids" })
  categoryUuids: string;
}


export class PostMyFollowsArticlesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsArticlesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostMyFollowsArticlesRequestBody;

  @Metadata()
  security: PostMyFollowsArticlesSecurity;
}


export class PostMyFollowsArticlesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
