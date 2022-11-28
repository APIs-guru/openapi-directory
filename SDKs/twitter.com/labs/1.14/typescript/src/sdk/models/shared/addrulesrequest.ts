import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleNoId } from "./rulenoid";



export class AddRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add", elemType: RuleNoId })
  add: RuleNoId[];
}
