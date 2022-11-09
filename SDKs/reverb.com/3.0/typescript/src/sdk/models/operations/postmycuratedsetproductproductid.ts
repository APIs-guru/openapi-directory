import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostMyCuratedSetProductProductIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=product_id" })
  productId: string;
}


export class PostMyCuratedSetProductProductIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyCuratedSetProductProductIdPathParams;
}


export class PostMyCuratedSetProductProductIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
