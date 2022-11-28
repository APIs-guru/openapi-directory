import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMyCuratedSetProductProductIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=product_id" })
  productId: string;
}


export class DeleteMyCuratedSetProductProductIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMyCuratedSetProductProductIdPathParams;
}


export class DeleteMyCuratedSetProductProductIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
