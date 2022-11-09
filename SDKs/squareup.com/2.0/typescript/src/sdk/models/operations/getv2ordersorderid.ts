import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV2OrdersOrderIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}


export class GetV2OrdersOrderIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetV2OrdersOrderIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV2OrdersOrderIdPathParams;

  @Metadata()
  security: GetV2OrdersOrderIdSecurity;
}


export class GetV2OrdersOrderIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveOrderResponse?: shared.RetrieveOrderResponse;

  @Metadata()
  statusCode: number;
}
