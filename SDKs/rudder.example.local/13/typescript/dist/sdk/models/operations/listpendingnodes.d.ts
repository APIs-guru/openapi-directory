import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPendingNodesQueryParams extends SpeakeasyBase {
    composition?: shared.NodeCompositionEnum;
    include?: string;
    query?: shared.NodeQuery;
    select?: string;
    where?: shared.NodeWhere[];
}
export declare enum ListPendingNodes200ApplicationJsonActionEnum {
    ListPendingNodes = "listPendingNodes"
}
/**
 * Information about the nodes
**/
export declare class ListPendingNodes200ApplicationJsonData extends SpeakeasyBase {
    nodes: shared.NodeFull[];
}
export declare enum ListPendingNodes200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ListPendingNodes200ApplicationJson extends SpeakeasyBase {
    action: ListPendingNodes200ApplicationJsonActionEnum;
    data: ListPendingNodes200ApplicationJsonData;
    result: ListPendingNodes200ApplicationJsonResultEnum;
}
export declare class ListPendingNodesRequest extends SpeakeasyBase {
    queryParams: ListPendingNodesQueryParams;
}
export declare class ListPendingNodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listPendingNodes200ApplicationJsonObject?: ListPendingNodes200ApplicationJson;
}
