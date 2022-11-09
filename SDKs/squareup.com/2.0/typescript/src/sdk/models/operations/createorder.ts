import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateOrderRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateOrderRequest;

  @Metadata()
  security: CreateOrderSecurity;
}


export class CreateOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createOrderResponse?: shared.CreateOrderResponse;

  @Metadata()
  statusCode: number;
}
