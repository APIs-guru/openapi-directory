import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TerminalRefund } from "./terminalrefund";


export class CreateTerminalRefundRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=refund" })
  refund?: TerminalRefund;
}
