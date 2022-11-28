import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListChangeRequests200ApplicationJsonActionEnum {
    ListChangeRequests = "listChangeRequests"
}
export declare class ListChangeRequests200ApplicationJsonData extends SpeakeasyBase {
    rules: shared.ChangeRequest[];
}
export declare enum ListChangeRequests200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ListChangeRequests200ApplicationJson extends SpeakeasyBase {
    action: ListChangeRequests200ApplicationJsonActionEnum;
    data: ListChangeRequests200ApplicationJsonData;
    result: ListChangeRequests200ApplicationJsonResultEnum;
}
export declare class ListChangeRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listChangeRequests200ApplicationJsonObject?: ListChangeRequests200ApplicationJson;
}
