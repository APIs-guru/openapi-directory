import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RefundPaymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RefundPaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RefundPaymentRequest;

  @Metadata()
  security: RefundPaymentSecurity;
}


export class RefundPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  refundPaymentResponse?: shared.RefundPaymentResponse;

  @Metadata()
  statusCode: number;
}
