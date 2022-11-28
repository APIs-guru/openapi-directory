import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveValidatedUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare enum RemoveValidatedUser200ApplicationJsonActionEnum {
    ListUsers = "listUsers"
}
export declare enum RemoveValidatedUser200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class RemoveValidatedUser200ApplicationJson extends SpeakeasyBase {
    action: RemoveValidatedUser200ApplicationJsonActionEnum;
    data: string;
    result: RemoveValidatedUser200ApplicationJsonResultEnum;
}
export declare class RemoveValidatedUserRequest extends SpeakeasyBase {
    pathParams: RemoveValidatedUserPathParams;
}
export declare class RemoveValidatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    removeValidatedUser200ApplicationJsonObject?: RemoveValidatedUser200ApplicationJson;
}
