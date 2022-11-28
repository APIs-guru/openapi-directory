import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeId } from "./nodeid";



export class NodeListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: NodeId })
  results?: NodeId[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount?: number;
}
