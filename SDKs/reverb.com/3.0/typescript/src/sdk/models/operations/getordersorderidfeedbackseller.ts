import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrdersOrderIdFeedbackSellerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class GetOrdersOrderIdFeedbackSellerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrdersOrderIdFeedbackSellerPathParams;
}


export class GetOrdersOrderIdFeedbackSellerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
