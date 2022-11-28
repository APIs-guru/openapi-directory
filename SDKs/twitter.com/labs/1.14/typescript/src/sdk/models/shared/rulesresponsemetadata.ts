import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RulesResponseMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sent" })
  sent: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: Map<string, any>;
}
