import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetComparisonShoppingPagesIdReviewsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetComparisonShoppingPagesIdReviewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetComparisonShoppingPagesIdReviewsPathParams;
}


export class GetComparisonShoppingPagesIdReviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
