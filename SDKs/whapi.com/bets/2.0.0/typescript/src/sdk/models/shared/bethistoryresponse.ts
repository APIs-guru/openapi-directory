import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacedBet } from "./placedbet";



export class BetHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bets", elemType: PlacedBet })
  bets?: PlacedBet[];
}
