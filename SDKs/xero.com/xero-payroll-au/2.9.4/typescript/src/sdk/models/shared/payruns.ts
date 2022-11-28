import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayRun } from "./payrun";



export class PayRuns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PayRuns", elemType: PayRun })
  payRuns?: PayRun[];
}
