import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WithdrawPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;
}
