import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";


export enum RuleSetRuleSetTypeEnum {
    NsxStandard = "NSX_STANDARD",
    NsxRedirect = "NSX_REDIRECT",
    AwsStandard = "AWS_STANDARD"
}


export class RuleSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firewall" })
  firewall?: Reference;

  @SpeakeasyMetadata({ data: "json, name=rule_set_type" })
  ruleSetType?: RuleSetRuleSetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: Reference })
  rules?: Reference[];
}
