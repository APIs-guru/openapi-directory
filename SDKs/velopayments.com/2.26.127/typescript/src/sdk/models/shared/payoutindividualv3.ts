import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayoutNameV3 } from "./payoutnamev3";



export class PayoutIndividualV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: PayoutNameV3;
}
