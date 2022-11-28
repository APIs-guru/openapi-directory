import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProductsReviewsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetProductsReviewsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductsReviewsIdPathParams;
}


export class GetProductsReviewsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
