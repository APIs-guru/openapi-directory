import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Betslipbet } from "./betslipbet";


export class BetSlipResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=betslip", elemType: shared.Betslipbet })
  betslip?: Betslipbet[];
}
