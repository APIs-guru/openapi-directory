import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAcceptedNodesQueryParams extends SpeakeasyBase {
    composition?: shared.NodeCompositionEnum;
    include?: string;
    query?: shared.NodeQuery;
    select?: string;
    where?: shared.NodeWhere[];
}
export declare enum ListAcceptedNodes200ApplicationJsonActionEnum {
    ListAcceptedNodes = "listAcceptedNodes"
}
/**
 * Information about the nodes
**/
export declare class ListAcceptedNodes200ApplicationJsonData extends SpeakeasyBase {
    nodes: shared.NodeFull[];
}
export declare enum ListAcceptedNodes200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ListAcceptedNodes200ApplicationJson extends SpeakeasyBase {
    action: ListAcceptedNodes200ApplicationJsonActionEnum;
    data: ListAcceptedNodes200ApplicationJsonData;
    result: ListAcceptedNodes200ApplicationJsonResultEnum;
}
export declare class ListAcceptedNodesRequest extends SpeakeasyBase {
    queryParams: ListAcceptedNodesQueryParams;
}
export declare class ListAcceptedNodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAcceptedNodes200ApplicationJsonObject?: ListAcceptedNodes200ApplicationJson;
}
