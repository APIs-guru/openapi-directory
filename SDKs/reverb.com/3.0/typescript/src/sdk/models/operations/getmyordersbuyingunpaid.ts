import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyOrdersBuyingUnpaidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyOrdersBuyingUnpaidRequest extends SpeakeasyBase {
  @Metadata()
  security: GetMyOrdersBuyingUnpaidSecurity;
}


export class GetMyOrdersBuyingUnpaidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
