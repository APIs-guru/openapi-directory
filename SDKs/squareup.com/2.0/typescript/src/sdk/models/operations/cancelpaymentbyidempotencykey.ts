import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelPaymentByIdempotencyKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CancelPaymentByIdempotencyKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelPaymentByIdempotencyKeyRequest;

  @Metadata()
  security: CancelPaymentByIdempotencyKeySecurity;
}


export class CancelPaymentByIdempotencyKeyResponse extends SpeakeasyBase {
  @Metadata()
  cancelPaymentByIdempotencyKeyResponse?: shared.CancelPaymentByIdempotencyKeyResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
