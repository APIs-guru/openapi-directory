import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Reference } from "./reference";
import { SimplePortRange } from "./simpleportrange";
import { Reference } from "./reference";

export enum RecommendedRuleActionEnum {
    Allow = "ALLOW"
,    Drop = "DROP"
}


export class RecommendedRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: RecommendedRuleActionEnum;

  @Metadata({ data: "json, name=destinations", elemType: shared.Reference })
  destinations?: Reference[];

  @Metadata({ data: "json, name=port_ranges", elemType: shared.SimplePortRange })
  portRanges?: SimplePortRange[];

  @Metadata({ data: "json, name=protocols" })
  protocols?: string[];

  @Metadata({ data: "json, name=sources", elemType: shared.Reference })
  sources?: Reference[];
}
