import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TerminalCheckout } from "./terminalcheckout";
import { Error } from "./error";


export class SearchTerminalCheckoutsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkouts", elemType: shared.TerminalCheckout })
  checkouts?: TerminalCheckout[];

  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
