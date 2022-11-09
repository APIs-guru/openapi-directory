import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMyCuratedSetProductProductIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=product_id" })
  productId: string;
}


export class DeleteMyCuratedSetProductProductIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMyCuratedSetProductProductIdPathParams;
}


export class DeleteMyCuratedSetProductProductIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
