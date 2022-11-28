import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RegeneratePolicies200ApplicationJsonActionEnum {
    RegeneratePolicies = "regeneratePolicies"
}
export declare enum RegeneratePolicies200ApplicationJsonDataPoliciesEnum {
    Started = "Started"
}
export declare class RegeneratePolicies200ApplicationJsonData extends SpeakeasyBase {
    policies: RegeneratePolicies200ApplicationJsonDataPoliciesEnum;
}
export declare enum RegeneratePolicies200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class RegeneratePolicies200ApplicationJson extends SpeakeasyBase {
    action: RegeneratePolicies200ApplicationJsonActionEnum;
    data: RegeneratePolicies200ApplicationJsonData;
    result: RegeneratePolicies200ApplicationJsonResultEnum;
}
export declare class RegeneratePoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    regeneratePolicies200ApplicationJsonObject?: RegeneratePolicies200ApplicationJson;
}
