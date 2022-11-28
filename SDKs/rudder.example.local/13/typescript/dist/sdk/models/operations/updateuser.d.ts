import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare enum UpdateUser200ApplicationJsonActionEnum {
    UpdateUser = "updateUser"
}
export declare class UpdateUser200ApplicationJsonDataUpdatedUser extends SpeakeasyBase {
    password: string;
    role: string[];
    username: string;
}
export declare class UpdateUser200ApplicationJsonData extends SpeakeasyBase {
    updatedUser: UpdateUser200ApplicationJsonDataUpdatedUser;
}
export declare enum UpdateUser200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateUser200ApplicationJson extends SpeakeasyBase {
    action: UpdateUser200ApplicationJsonActionEnum;
    data: UpdateUser200ApplicationJsonData;
    result: UpdateUser200ApplicationJsonResultEnum;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    pathParams: UpdateUserPathParams;
    request: shared.Users;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateUser200ApplicationJsonObject?: UpdateUser200ApplicationJson;
}
