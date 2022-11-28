import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare enum DeleteUser200ApplicationJsonActionEnum {
    DeleteUser = "deleteUser"
}
export declare class DeleteUser200ApplicationJsonDataDeletedUser extends SpeakeasyBase {
    username: string;
}
export declare class DeleteUser200ApplicationJsonData extends SpeakeasyBase {
    deletedUser: DeleteUser200ApplicationJsonDataDeletedUser;
}
export declare enum DeleteUser200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class DeleteUser200ApplicationJson extends SpeakeasyBase {
    action: DeleteUser200ApplicationJsonActionEnum;
    data: DeleteUser200ApplicationJsonData;
    result: DeleteUser200ApplicationJsonResultEnum;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    pathParams: DeleteUserPathParams;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteUser200ApplicationJsonObject?: DeleteUser200ApplicationJson;
}
