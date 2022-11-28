import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateNodePathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare enum UpdateNode200ApplicationJsonActionEnum {
    UpdateNode = "updateNode"
}
/**
 * Information about the node
**/
export declare class UpdateNode200ApplicationJsonData extends SpeakeasyBase {
    nodes: shared.NodeFull[];
}
export declare enum UpdateNode200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateNode200ApplicationJson extends SpeakeasyBase {
    action: UpdateNode200ApplicationJsonActionEnum;
    data: UpdateNode200ApplicationJsonData;
    result: UpdateNode200ApplicationJsonResultEnum;
}
export declare class UpdateNodeRequest extends SpeakeasyBase {
    pathParams: UpdateNodePathParams;
    request?: shared.NodeSettings;
}
export declare class UpdateNodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNode200ApplicationJsonObject?: UpdateNode200ApplicationJson;
}
