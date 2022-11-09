import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PayOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class PayOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PayOrderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PayOrderPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PayOrderRequest;

  @Metadata()
  security: PayOrderSecurity;
}


export class PayOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payOrderResponse?: shared.PayOrderResponse;

  @Metadata()
  statusCode: number;
}
