import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodeTypeEnum } from "./nodetypeenum";

export enum NodeNodeTypeEnum {
    ProxyVm = "PROXY_VM"
,    PlatformVm = "PLATFORM_VM"
}


export class Node extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_type" })
  entityType?: NodeTypeEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=node_type" })
  nodeType?: NodeNodeTypeEnum;
}
