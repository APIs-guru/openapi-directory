import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bet } from "./bet";



export class ComplexBetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bets", elemType: Bet })
  bets?: Bet[];
}
