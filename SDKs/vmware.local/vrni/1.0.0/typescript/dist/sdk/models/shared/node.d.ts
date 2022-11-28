import { SpeakeasyBase } from "../../../internal/utils";
import { NodeTypeEnum } from "./nodetypeenum";
export declare enum NodeNodeTypeEnum {
    ProxyVm = "PROXY_VM",
    PlatformVm = "PLATFORM_VM"
}
export declare class Node extends SpeakeasyBase {
    entityType?: NodeTypeEnum;
    id?: string;
    ipAddress?: string;
    name?: string;
    nodeId?: string;
    nodeType?: NodeNodeTypeEnum;
}
