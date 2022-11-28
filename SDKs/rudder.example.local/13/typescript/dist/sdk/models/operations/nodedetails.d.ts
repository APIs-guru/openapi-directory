import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NodeDetailsPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodeDetailsQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare enum NodeDetails200ApplicationJsonActionEnum {
    NodeDetails = "nodeDetails"
}
/**
 * Information about the node
**/
export declare class NodeDetails200ApplicationJsonData extends SpeakeasyBase {
    nodes: shared.NodeFull[];
}
export declare enum NodeDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class NodeDetails200ApplicationJson extends SpeakeasyBase {
    action: NodeDetails200ApplicationJsonActionEnum;
    data: NodeDetails200ApplicationJsonData;
    result: NodeDetails200ApplicationJsonResultEnum;
}
export declare class NodeDetailsRequest extends SpeakeasyBase {
    pathParams: NodeDetailsPathParams;
    queryParams: NodeDetailsQueryParams;
}
export declare class NodeDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    nodeDetails200ApplicationJsonObject?: NodeDetails200ApplicationJson;
}
