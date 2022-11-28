import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteNodePathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class DeleteNodeQueryParams extends SpeakeasyBase {
    mode?: shared.NodeDeleteModeEnum;
}
export declare enum DeleteNode200ApplicationJsonActionEnum {
    DeleteNode = "deleteNode"
}
/**
 * Information about the node
**/
export declare class DeleteNode200ApplicationJsonData extends SpeakeasyBase {
    nodes: shared.NodeFull[];
}
export declare enum DeleteNode200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class DeleteNode200ApplicationJson extends SpeakeasyBase {
    action: DeleteNode200ApplicationJsonActionEnum;
    data: DeleteNode200ApplicationJsonData;
    result: DeleteNode200ApplicationJsonResultEnum;
}
export declare class DeleteNodeRequest extends SpeakeasyBase {
    pathParams: DeleteNodePathParams;
    queryParams: DeleteNodeQueryParams;
}
export declare class DeleteNodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteNode200ApplicationJsonObject?: DeleteNode200ApplicationJson;
}
