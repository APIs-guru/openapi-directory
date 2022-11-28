import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
