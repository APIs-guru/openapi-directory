import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TerminalCheckout } from "./terminalcheckout";


export class CreateTerminalCheckoutRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkout" })
  checkout: TerminalCheckout;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;
}
