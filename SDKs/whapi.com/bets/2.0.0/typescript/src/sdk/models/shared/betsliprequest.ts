import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Leg } from "./leg";



export class BetSlipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=legs", elemType: Leg })
  legs?: Leg[];
}
