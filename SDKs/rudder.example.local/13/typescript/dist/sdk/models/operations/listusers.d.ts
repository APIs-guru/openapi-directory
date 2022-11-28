import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListUsers200ApplicationJsonActionEnum {
    ListUsers = "listUsers"
}
export declare enum ListUsers200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ListUsers200ApplicationJson extends SpeakeasyBase {
    action: ListUsers200ApplicationJsonActionEnum;
    data: shared.ValidatedUser[];
    result: ListUsers200ApplicationJsonResultEnum;
}
export declare class ListUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listUsers200ApplicationJsonObject?: ListUsers200ApplicationJson;
}
