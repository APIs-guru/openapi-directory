import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodeWhere extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: string;

  @Metadata({ data: "json, name=comparator" })
  comparator?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
