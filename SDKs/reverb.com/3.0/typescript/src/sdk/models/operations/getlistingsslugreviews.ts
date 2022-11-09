import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetListingsSlugReviewsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetListingsSlugReviewsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingsSlugReviewsPathParams;
}


export class GetListingsSlugReviewsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
