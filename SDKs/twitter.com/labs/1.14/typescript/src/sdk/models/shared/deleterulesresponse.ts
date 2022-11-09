import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RulesResponseMetadata } from "./rulesresponsemetadata";


export class DeleteRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta: RulesResponseMetadata;
}
