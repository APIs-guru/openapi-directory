import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TerminalCheckoutQueryFilter } from "./terminalcheckoutqueryfilter";
import { TerminalCheckoutQuerySort } from "./terminalcheckoutquerysort";


export class TerminalCheckoutQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: TerminalCheckoutQueryFilter;

  @Metadata({ data: "json, name=sort" })
  sort?: TerminalCheckoutQuerySort;
}
