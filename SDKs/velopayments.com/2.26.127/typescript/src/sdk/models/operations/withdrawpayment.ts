import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WithdrawPaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: string;
}


export class WithdrawPaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WithdrawPaymentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WithdrawPaymentRequest;
}


export class WithdrawPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
