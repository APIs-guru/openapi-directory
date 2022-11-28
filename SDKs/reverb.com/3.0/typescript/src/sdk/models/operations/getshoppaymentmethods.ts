import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShopPaymentMethodsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetShopPaymentMethodsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetShopPaymentMethodsSecurity;
}


export class GetShopPaymentMethodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
