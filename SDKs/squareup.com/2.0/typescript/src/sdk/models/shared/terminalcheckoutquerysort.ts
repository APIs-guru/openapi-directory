import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TerminalCheckoutQuerySort extends SpeakeasyBase {
  @Metadata({ data: "json, name=sort_order" })
  sortOrder?: string;
}
