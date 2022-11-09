import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TerminalRefundQuery } from "./terminalrefundquery";


export class SearchTerminalRefundsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=query" })
  query?: TerminalRefundQuery;
}
