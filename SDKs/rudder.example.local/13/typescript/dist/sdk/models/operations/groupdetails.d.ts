import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupDetailsPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare enum GroupDetails200ApplicationJsonActionEnum {
    GroupDetails = "groupDetails"
}
export declare class GroupDetails200ApplicationJsonData extends SpeakeasyBase {
    groups: shared.Group[];
}
export declare enum GroupDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GroupDetails200ApplicationJson extends SpeakeasyBase {
    action: GroupDetails200ApplicationJsonActionEnum;
    data: GroupDetails200ApplicationJsonData;
    result: GroupDetails200ApplicationJsonResultEnum;
}
export declare class GroupDetailsRequest extends SpeakeasyBase {
    pathParams: GroupDetailsPathParams;
}
export declare class GroupDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    groupDetails200ApplicationJsonObject?: GroupDetails200ApplicationJson;
}
