import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProductsSlugReviewsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class PostProductsSlugReviewsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostProductsSlugReviewsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProductsSlugReviewsPathParams;

  @Metadata()
  security: PostProductsSlugReviewsSecurity;
}


export class PostProductsSlugReviewsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
