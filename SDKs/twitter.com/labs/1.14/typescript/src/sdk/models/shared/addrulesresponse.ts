import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rule } from "./rule";
import { RulesResponseMetadata } from "./rulesresponsemetadata";


export class AddRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Rule })
  data: Rule[];

  @Metadata({ data: "json, name=meta" })
  meta: RulesResponseMetadata;
}
