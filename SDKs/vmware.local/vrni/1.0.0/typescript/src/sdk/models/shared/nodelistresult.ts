import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NodeId } from "./nodeid";


export class NodeListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.NodeId })
  results?: NodeId[];

  @Metadata({ data: "json, name=total_count" })
  totalCount?: number;
}
