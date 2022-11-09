import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Reference } from "./reference";
import { Reference } from "./reference";

export enum RuleSetRuleSetTypeEnum {
    NsxStandard = "NSX_STANDARD"
,    NsxRedirect = "NSX_REDIRECT"
,    AwsStandard = "AWS_STANDARD"
}


export class RuleSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=firewall" })
  firewall?: Reference;

  @Metadata({ data: "json, name=rule_set_type" })
  ruleSetType?: RuleSetRuleSetTypeEnum;

  @Metadata({ data: "json, name=rules", elemType: shared.Reference })
  rules?: Reference[];
}
