import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NodeInheritedPropertiesPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare enum NodeInheritedProperties200ApplicationJsonActionEnum {
    NodeInheritedProperties = "nodeInheritedProperties"
}
export declare enum NodeInheritedProperties200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class NodeInheritedProperties200ApplicationJson extends SpeakeasyBase {
    action: NodeInheritedProperties200ApplicationJsonActionEnum;
    data: shared.NodeInheritedProperties[];
    result: NodeInheritedProperties200ApplicationJsonResultEnum;
}
export declare class NodeInheritedPropertiesRequest extends SpeakeasyBase {
    pathParams: NodeInheritedPropertiesPathParams;
}
export declare class NodeInheritedPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    nodeInheritedProperties200ApplicationJsonObject?: NodeInheritedProperties200ApplicationJson;
}
