import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGroupTree200ApplicationJsonActionEnum {
    GetGroupTree = "GetGroupTree"
}
export declare class GetGroupTree200ApplicationJsonData extends SpeakeasyBase {
    groupCategories: Map<string, any>;
}
export declare enum GetGroupTree200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetGroupTree200ApplicationJson extends SpeakeasyBase {
    action: GetGroupTree200ApplicationJsonActionEnum;
    data: GetGroupTree200ApplicationJsonData;
    result: GetGroupTree200ApplicationJsonResultEnum;
}
export declare class GetGroupTreeResponse extends SpeakeasyBase {
    contentType: string;
    getGroupTree200ApplicationJsonObject?: GetGroupTree200ApplicationJson;
    statusCode: number;
}
