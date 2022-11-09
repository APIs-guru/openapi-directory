import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TerminalCheckoutQuery } from "./terminalcheckoutquery";


export class SearchTerminalCheckoutsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=query" })
  query?: TerminalCheckoutQuery;
}
