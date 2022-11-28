import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProductsSlugReviewsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetProductsSlugReviewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductsSlugReviewsPathParams;
}


export class GetProductsSlugReviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
