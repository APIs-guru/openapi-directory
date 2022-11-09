import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelPaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_id" })
  paymentId: string;
}


export class CancelPaymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CancelPaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelPaymentPathParams;

  @Metadata()
  security: CancelPaymentSecurity;
}


export class CancelPaymentResponse extends SpeakeasyBase {
  @Metadata()
  cancelPaymentResponse?: shared.CancelPaymentResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
