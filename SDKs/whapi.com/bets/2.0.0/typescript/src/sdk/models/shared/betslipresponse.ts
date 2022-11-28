import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Betslipbet } from "./betslipbet";



export class BetSlipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=betslip", elemType: Betslipbet })
  betslip?: Betslipbet[];
}
