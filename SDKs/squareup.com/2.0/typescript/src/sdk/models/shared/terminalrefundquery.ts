import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TerminalRefundQueryFilter } from "./terminalrefundqueryfilter";
import { TerminalRefundQuerySort } from "./terminalrefundquerysort";


export class TerminalRefundQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: TerminalRefundQueryFilter;

  @Metadata({ data: "json, name=sort" })
  sort?: TerminalRefundQuerySort;
}
