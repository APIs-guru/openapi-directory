import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PayRun } from "./payrun";


export class PayRuns extends SpeakeasyBase {
  @Metadata({ data: "json, name=PayRuns", elemType: shared.PayRun })
  payRuns?: PayRun[];
}
