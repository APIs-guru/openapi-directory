import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
import { SimplePortRange } from "./simpleportrange";


export enum RecommendedRuleActionEnum {
    Allow = "ALLOW",
    Drop = "DROP"
}


export class RecommendedRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: RecommendedRuleActionEnum;

  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: Reference })
  destinations?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=port_ranges", elemType: SimplePortRange })
  portRanges?: SimplePortRange[];

  @SpeakeasyMetadata({ data: "json, name=protocols" })
  protocols?: string[];

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Reference })
  sources?: Reference[];
}
