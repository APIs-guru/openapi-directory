import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetComparisonShoppingPagesIdReviewsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetComparisonShoppingPagesIdReviewsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetComparisonShoppingPagesIdReviewsPathParams;
}


export class GetComparisonShoppingPagesIdReviewsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
