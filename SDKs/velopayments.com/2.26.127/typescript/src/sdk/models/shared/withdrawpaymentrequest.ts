import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WithdrawPaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason: string;
}
