import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleTargets } from "./ruletargets";



export class RuleTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directives" })
  directives?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=system" })
  system?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: RuleTags })
  tags?: RuleTags[];

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: RuleTargets })
  targets?: RuleTargets[];
}
