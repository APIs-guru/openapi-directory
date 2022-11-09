import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_id" })
  paymentId: string;
}


export class GetPaymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetPaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentPathParams;

  @Metadata()
  security: GetPaymentSecurity;
}


export class GetPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPaymentResponse?: shared.GetPaymentResponse;

  @Metadata()
  statusCode: number;
}
