import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRulesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
