import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrdersOrderIdFeedbackSellerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class GetOrdersOrderIdFeedbackSellerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrdersOrderIdFeedbackSellerPathParams;
}


export class GetOrdersOrderIdFeedbackSellerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
