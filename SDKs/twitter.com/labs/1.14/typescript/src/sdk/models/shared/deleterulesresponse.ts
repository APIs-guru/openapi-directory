import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RulesResponseMetadata } from "./rulesresponsemetadata";



export class DeleteRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RulesResponseMetadata;
}
