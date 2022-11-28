import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRole200ApplicationJsonActionEnum {
    GetRole = "getRole"
}
export declare enum GetRole200ApplicationJsonDataIdEnum {
    Inventory = "inventory",
    Compliance = "compliance",
    Administrator = "administrator",
    Etc = "etc"
}
export declare enum GetRole200ApplicationJsonDataRightsEnum {
    NodeRead = "node_read",
    UserAccountAll = "userAccount_all"
}
export declare class GetRole200ApplicationJsonData extends SpeakeasyBase {
    id: GetRole200ApplicationJsonDataIdEnum;
    rights: GetRole200ApplicationJsonDataRightsEnum[];
}
export declare enum GetRole200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetRole200ApplicationJson extends SpeakeasyBase {
    action: GetRole200ApplicationJsonActionEnum;
    data: GetRole200ApplicationJsonData[];
    result: GetRole200ApplicationJsonResultEnum;
}
export declare class GetRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRole200ApplicationJsonObject?: GetRole200ApplicationJson;
}
