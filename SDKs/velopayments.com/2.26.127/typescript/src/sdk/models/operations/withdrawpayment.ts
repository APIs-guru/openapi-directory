import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WithdrawPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: string;
}


export class WithdrawPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WithdrawPaymentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WithdrawPaymentRequest;
}


export class WithdrawPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
