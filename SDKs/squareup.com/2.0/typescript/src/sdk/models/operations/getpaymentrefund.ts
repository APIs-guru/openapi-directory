import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentRefundPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=refund_id" })
  refundId: string;
}


export class GetPaymentRefundSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetPaymentRefundRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentRefundPathParams;

  @Metadata()
  security: GetPaymentRefundSecurity;
}


export class GetPaymentRefundResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPaymentRefundResponse?: shared.GetPaymentRefundResponse;

  @Metadata()
  statusCode: number;
}
