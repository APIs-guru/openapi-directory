import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class UpdateOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateOrderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrderPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.V1UpdateOrderRequest;

  @Metadata()
  security: UpdateOrderSecurity;
}


export class UpdateOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v1Order?: shared.V1Order;
}
