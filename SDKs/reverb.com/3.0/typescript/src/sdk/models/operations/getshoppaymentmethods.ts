import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShopPaymentMethodsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetShopPaymentMethodsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetShopPaymentMethodsSecurity;
}


export class GetShopPaymentMethodsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
