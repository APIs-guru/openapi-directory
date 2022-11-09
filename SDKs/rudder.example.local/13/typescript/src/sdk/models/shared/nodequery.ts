import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum NodeQueryCompositionEnum {
    And = "and"
,    Or = "or"
}


export class NodeQueryWhere extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: string;

  @Metadata({ data: "json, name=comparator" })
  comparator?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class NodeQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=composition" })
  composition?: NodeQueryCompositionEnum;

  @Metadata({ data: "json, name=select" })
  select?: string;

  @Metadata({ data: "json, name=where", elemType: shared.NodeQueryWhere })
  where?: NodeQueryWhere[];
}
