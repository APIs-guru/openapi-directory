import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutV2OrdersOrderIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class PutV2OrdersOrderIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutV2OrdersOrderIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutV2OrdersOrderIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateOrderRequest;

  @Metadata()
  security: PutV2OrdersOrderIdSecurity;
}


export class PutV2OrdersOrderIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrderResponse?: shared.UpdateOrderResponse;
}
