import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuleDetailsPathParams extends SpeakeasyBase {
    ruleId: string;
}
export declare enum RuleDetails200ApplicationJsonActionEnum {
    RuleDetails = "ruleDetails"
}
export declare class RuleDetails200ApplicationJsonData extends SpeakeasyBase {
    rules: shared.Rule[];
}
export declare enum RuleDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class RuleDetails200ApplicationJson extends SpeakeasyBase {
    action: RuleDetails200ApplicationJsonActionEnum;
    data: RuleDetails200ApplicationJsonData;
    result: RuleDetails200ApplicationJsonResultEnum;
}
export declare class RuleDetailsRequest extends SpeakeasyBase {
    pathParams: RuleDetailsPathParams;
}
export declare class RuleDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ruleDetails200ApplicationJsonObject?: RuleDetails200ApplicationJson;
}
