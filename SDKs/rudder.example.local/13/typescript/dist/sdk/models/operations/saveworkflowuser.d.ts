import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SaveWorkflowUserRequestBody extends SpeakeasyBase {
    validatedUsers: string[];
}
export declare enum SaveWorkflowUser200ApplicationJsonActionEnum {
    AddUser = "addUser"
}
export declare enum SaveWorkflowUser200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class SaveWorkflowUser200ApplicationJson extends SpeakeasyBase {
    action: SaveWorkflowUser200ApplicationJsonActionEnum;
    data: shared.ValidatedUser;
    result: SaveWorkflowUser200ApplicationJsonResultEnum;
}
export declare class SaveWorkflowUserRequest extends SpeakeasyBase {
    request: SaveWorkflowUserRequestBody;
}
export declare class SaveWorkflowUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    saveWorkflowUser200ApplicationJsonObject?: SaveWorkflowUser200ApplicationJson;
}
