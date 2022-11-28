import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateGroup200ApplicationJsonActionEnum {
    CreateGroup = "createGroup"
}
export declare class CreateGroup200ApplicationJsonData extends SpeakeasyBase {
    groups: shared.Group[];
}
export declare enum CreateGroup200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class CreateGroup200ApplicationJson extends SpeakeasyBase {
    action: CreateGroup200ApplicationJsonActionEnum;
    data: CreateGroup200ApplicationJsonData;
    result: CreateGroup200ApplicationJsonResultEnum;
}
export declare class CreateGroupRequest extends SpeakeasyBase {
    request?: shared.GroupNew;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGroup200ApplicationJsonObject?: CreateGroup200ApplicationJson;
}
