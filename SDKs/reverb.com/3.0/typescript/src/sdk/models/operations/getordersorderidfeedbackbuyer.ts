import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrdersOrderIdFeedbackBuyerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class GetOrdersOrderIdFeedbackBuyerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrdersOrderIdFeedbackBuyerPathParams;
}


export class GetOrdersOrderIdFeedbackBuyerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
