import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeTypeEnum } from "./nodetypeenum";



export class NodeId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: NodeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
