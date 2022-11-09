import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleNoId } from "./rulenoid";


export class AddRulesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=add", elemType: shared.RuleNoId })
  add: RuleNoId[];
}
