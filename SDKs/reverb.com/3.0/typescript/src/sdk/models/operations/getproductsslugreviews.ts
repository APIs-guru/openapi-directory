import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductsSlugReviewsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetProductsSlugReviewsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsSlugReviewsPathParams;
}


export class GetProductsSlugReviewsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
