import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNodesStatusQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare enum GetNodesStatus200ApplicationJsonActionEnum {
    GetNodesStatus = "getNodesStatus"
}
export declare enum GetNodesStatus200ApplicationJsonDataNodesStatusEnum {
    Pending = "pending",
    Accepted = "accepted",
    Deleted = "deleted",
    Unknown = "unknown"
}
export declare class GetNodesStatus200ApplicationJsonDataNodes extends SpeakeasyBase {
    id: string;
    status: GetNodesStatus200ApplicationJsonDataNodesStatusEnum;
}
/**
 * List of nodeId and associated status
**/
export declare class GetNodesStatus200ApplicationJsonData extends SpeakeasyBase {
    nodes: GetNodesStatus200ApplicationJsonDataNodes[];
}
export declare enum GetNodesStatus200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetNodesStatus200ApplicationJson extends SpeakeasyBase {
    action: GetNodesStatus200ApplicationJsonActionEnum;
    data: GetNodesStatus200ApplicationJsonData;
    result: GetNodesStatus200ApplicationJsonResultEnum;
}
export declare class GetNodesStatusRequest extends SpeakeasyBase {
    queryParams: GetNodesStatusQueryParams;
}
export declare class GetNodesStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNodesStatus200ApplicationJsonObject?: GetNodesStatus200ApplicationJson;
}
