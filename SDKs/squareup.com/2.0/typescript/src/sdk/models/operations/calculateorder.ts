import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CalculateOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CalculateOrderRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CalculateOrderRequest;

  @Metadata()
  security: CalculateOrderSecurity;
}


export class CalculateOrderResponse extends SpeakeasyBase {
  @Metadata()
  calculateOrderResponse?: shared.CalculateOrderResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
