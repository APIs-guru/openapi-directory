import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RuleNoId extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
