import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostListingsSlugReviewsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class PostListingsSlugReviewsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostListingsSlugReviewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostListingsSlugReviewsPathParams;

  @SpeakeasyMetadata()
  security: PostListingsSlugReviewsSecurity;
}


export class PostListingsSlugReviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
