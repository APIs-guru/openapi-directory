import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostMyCuratedSetProductProductIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=product_id" })
  productId: string;
}


export class PostMyCuratedSetProductProductIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyCuratedSetProductProductIdPathParams;
}


export class PostMyCuratedSetProductProductIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
