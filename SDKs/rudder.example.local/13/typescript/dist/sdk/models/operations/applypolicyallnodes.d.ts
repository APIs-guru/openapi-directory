import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApplyPolicyAllNodes200ApplicationJsonActionEnum {
    ApplyPolicyAllNodes = "applyPolicyAllNodes"
}
export declare class ApplyPolicyAllNodes200ApplicationJsonData extends SpeakeasyBase {
    hostname?: string;
    id?: string;
    result?: string;
}
export declare enum ApplyPolicyAllNodes200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ApplyPolicyAllNodes200ApplicationJson extends SpeakeasyBase {
    action: ApplyPolicyAllNodes200ApplicationJsonActionEnum;
    data: ApplyPolicyAllNodes200ApplicationJsonData[];
    result: ApplyPolicyAllNodes200ApplicationJsonResultEnum;
}
export declare class ApplyPolicyAllNodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    applyPolicyAllNodes200ApplicationJsonObject?: ApplyPolicyAllNodes200ApplicationJson;
}
