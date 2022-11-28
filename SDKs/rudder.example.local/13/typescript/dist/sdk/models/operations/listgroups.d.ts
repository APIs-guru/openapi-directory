import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListGroups200ApplicationJsonActionEnum {
    ListGroups = "listGroups"
}
export declare class ListGroups200ApplicationJsonData extends SpeakeasyBase {
    groups: shared.Group[];
}
export declare enum ListGroups200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ListGroups200ApplicationJson extends SpeakeasyBase {
    action: ListGroups200ApplicationJsonActionEnum;
    data: ListGroups200ApplicationJsonData;
    result: ListGroups200ApplicationJsonResultEnum;
}
export declare class ListGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listGroups200ApplicationJsonObject?: ListGroups200ApplicationJson;
}
