import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
