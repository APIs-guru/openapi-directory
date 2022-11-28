import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddUser200ApplicationJsonActionEnum {
    AddUser = "addUser"
}
export declare class AddUser200ApplicationJsonDataAddedUser extends SpeakeasyBase {
    password?: string;
    role?: string[];
    username?: string;
}
export declare class AddUser200ApplicationJsonData extends SpeakeasyBase {
    addedUser: AddUser200ApplicationJsonDataAddedUser;
}
export declare enum AddUser200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class AddUser200ApplicationJson extends SpeakeasyBase {
    action: AddUser200ApplicationJsonActionEnum;
    data: AddUser200ApplicationJsonData;
    result: AddUser200ApplicationJsonResultEnum;
}
export declare class AddUserRequest extends SpeakeasyBase {
    request: shared.Users;
}
export declare class AddUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addUser200ApplicationJsonObject?: AddUser200ApplicationJson;
}
