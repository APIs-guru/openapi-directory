import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyOrdersSellingAwaitingShipmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyOrdersSellingAwaitingShipmentRequest extends SpeakeasyBase {
  @Metadata()
  security: GetMyOrdersSellingAwaitingShipmentSecurity;
}


export class GetMyOrdersSellingAwaitingShipmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
