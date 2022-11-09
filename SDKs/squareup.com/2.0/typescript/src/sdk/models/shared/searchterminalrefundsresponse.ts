import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { TerminalRefund } from "./terminalrefund";


export class SearchTerminalRefundsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=refunds", elemType: shared.TerminalRefund })
  refunds?: TerminalRefund[];
}
