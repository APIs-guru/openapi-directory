import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangePendingNodeStatusPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare enum ChangePendingNodeStatusRequestBodyStatusEnum {
    Accepted = "accepted",
    Refused = "refused"
}
export declare class ChangePendingNodeStatusRequestBody extends SpeakeasyBase {
    status?: ChangePendingNodeStatusRequestBodyStatusEnum;
}
export declare enum ChangePendingNodeStatus200ApplicationJsonActionEnum {
    ChangePendingNodeStatus = "changePendingNodeStatus"
}
/**
 * Information about the node
**/
export declare class ChangePendingNodeStatus200ApplicationJsonData extends SpeakeasyBase {
    nodes: shared.NodeFull[];
}
export declare enum ChangePendingNodeStatus200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ChangePendingNodeStatus200ApplicationJson extends SpeakeasyBase {
    action: ChangePendingNodeStatus200ApplicationJsonActionEnum;
    data: ChangePendingNodeStatus200ApplicationJsonData;
    result: ChangePendingNodeStatus200ApplicationJsonResultEnum;
}
export declare class ChangePendingNodeStatusRequest extends SpeakeasyBase {
    pathParams: ChangePendingNodeStatusPathParams;
    request?: ChangePendingNodeStatusRequestBody;
}
export declare class ChangePendingNodeStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    changePendingNodeStatus200ApplicationJsonObject?: ChangePendingNodeStatus200ApplicationJson;
}
