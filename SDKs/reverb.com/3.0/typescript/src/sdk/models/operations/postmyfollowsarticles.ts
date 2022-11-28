import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyFollowsArticlesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category_uuids" })
  categoryUuids: string;
}


export class PostMyFollowsArticlesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsArticlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostMyFollowsArticlesRequestBody;

  @SpeakeasyMetadata()
  security: PostMyFollowsArticlesSecurity;
}


export class PostMyFollowsArticlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
