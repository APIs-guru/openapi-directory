import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductsReviewsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetProductsReviewsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsReviewsIdPathParams;
}


export class GetProductsReviewsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
