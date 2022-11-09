import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodeTypeEnum } from "./nodetypeenum";


export class NodeId extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_type" })
  entityType?: NodeTypeEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
