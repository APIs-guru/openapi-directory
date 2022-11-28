import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyOrdersSellingUnpaidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyOrdersSellingUnpaidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetMyOrdersSellingUnpaidSecurity;
}


export class GetMyOrdersSellingUnpaidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
