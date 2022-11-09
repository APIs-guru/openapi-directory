import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PayoutNameV3 } from "./payoutnamev3";


export class PayoutIndividualV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: PayoutNameV3;
}
