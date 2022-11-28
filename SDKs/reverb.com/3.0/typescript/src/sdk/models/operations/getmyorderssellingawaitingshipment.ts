import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyOrdersSellingAwaitingShipmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyOrdersSellingAwaitingShipmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetMyOrdersSellingAwaitingShipmentSecurity;
}


export class GetMyOrdersSellingAwaitingShipmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
