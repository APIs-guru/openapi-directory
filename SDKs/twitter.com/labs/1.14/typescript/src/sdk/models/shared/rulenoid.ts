import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RuleNoId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
