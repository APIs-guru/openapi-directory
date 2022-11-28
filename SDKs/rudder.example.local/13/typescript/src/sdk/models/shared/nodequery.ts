import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NodeQueryCompositionEnum {
    And = "and",
    Or = "or"
}


export class NodeQueryWhere extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: string;

  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class NodeQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=composition" })
  composition?: NodeQueryCompositionEnum;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: string;

  @SpeakeasyMetadata({ data: "json, name=where", elemType: NodeQueryWhere })
  where?: NodeQueryWhere[];
}
