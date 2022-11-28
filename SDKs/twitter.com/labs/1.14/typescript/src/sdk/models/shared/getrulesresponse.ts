import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
import { RulesResponseMetadata } from "./rulesresponsemetadata";



export class GetRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Rule })
  data: Rule[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RulesResponseMetadata;
}
