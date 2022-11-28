import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrdersOrderIdFeedbackBuyerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class GetOrdersOrderIdFeedbackBuyerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrdersOrderIdFeedbackBuyerPathParams;
}


export class GetOrdersOrderIdFeedbackBuyerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
