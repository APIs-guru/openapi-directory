import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlacedBet } from "./placedbet";


export class BetHistoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bets", elemType: shared.PlacedBet })
  bets?: PlacedBet[];
}
