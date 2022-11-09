import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPaymentChannelRulesV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentChannelRulesResponse?: shared.PaymentChannelRulesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse401?: any;
}
