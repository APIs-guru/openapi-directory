import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Leg } from "./leg";


export class BetSlipRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=legs", elemType: shared.Leg })
  legs?: Leg[];
}
