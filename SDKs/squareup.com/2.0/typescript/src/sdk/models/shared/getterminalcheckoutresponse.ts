import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TerminalCheckout } from "./terminalcheckout";
import { Error } from "./error";


export class GetTerminalCheckoutResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkout" })
  checkout?: TerminalCheckout;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
