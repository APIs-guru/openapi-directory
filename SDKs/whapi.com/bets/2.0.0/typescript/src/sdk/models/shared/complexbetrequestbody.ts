import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Bet } from "./bet";


export class ComplexBetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bets", elemType: shared.Bet })
  bets?: Bet[];
}
