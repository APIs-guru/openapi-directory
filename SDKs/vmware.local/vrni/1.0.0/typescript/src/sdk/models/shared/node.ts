import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeTypeEnum } from "./nodetypeenum";


export enum NodeNodeTypeEnum {
    ProxyVm = "PROXY_VM",
    PlatformVm = "PLATFORM_VM"
}


export class Node extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: NodeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=node_type" })
  nodeType?: NodeNodeTypeEnum;
}
