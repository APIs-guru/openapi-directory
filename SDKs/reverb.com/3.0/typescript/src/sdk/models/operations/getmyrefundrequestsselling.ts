import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyRefundRequestsSellingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyRefundRequestsSellingRequest extends SpeakeasyBase {
  @Metadata()
  security: GetMyRefundRequestsSellingSecurity;
}


export class GetMyRefundRequestsSellingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
