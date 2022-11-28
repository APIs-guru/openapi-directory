import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetListingsSlugReviewsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetListingsSlugReviewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingsSlugReviewsPathParams;
}


export class GetListingsSlugReviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
