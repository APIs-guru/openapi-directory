import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyOrdersSellingUnpaidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyOrdersSellingUnpaidRequest extends SpeakeasyBase {
  @Metadata()
  security: GetMyOrdersSellingUnpaidSecurity;
}


export class GetMyOrdersSellingUnpaidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
