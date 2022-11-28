import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpdatePolicies200ApplicationJsonActionEnum {
    UpdatePolicies = "updatePolicies"
}
export declare enum UpdatePolicies200ApplicationJsonDataPoliciesEnum {
    Started = "Started"
}
export declare class UpdatePolicies200ApplicationJsonData extends SpeakeasyBase {
    policies: UpdatePolicies200ApplicationJsonDataPoliciesEnum;
}
export declare enum UpdatePolicies200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdatePolicies200ApplicationJson extends SpeakeasyBase {
    action: UpdatePolicies200ApplicationJsonActionEnum;
    data: UpdatePolicies200ApplicationJsonData;
    result: UpdatePolicies200ApplicationJsonResultEnum;
}
export declare class UpdatePoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updatePolicies200ApplicationJsonObject?: UpdatePolicies200ApplicationJson;
}
