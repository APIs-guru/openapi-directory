import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RulesResponseMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=sent" })
  sent: string;

  @Metadata({ data: "json, name=summary" })
  summary?: Map<string, any>;
}
