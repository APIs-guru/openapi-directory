import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateRule200ApplicationJsonActionEnum {
    CreateRule = "createRule"
}
export declare class CreateRule200ApplicationJsonData extends SpeakeasyBase {
    rules: shared.Rule[];
}
export declare enum CreateRule200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class CreateRule200ApplicationJson extends SpeakeasyBase {
    action: CreateRule200ApplicationJsonActionEnum;
    data: CreateRule200ApplicationJsonData;
    result: CreateRule200ApplicationJsonResultEnum;
}
export declare class CreateRuleRequest extends SpeakeasyBase {
    request?: shared.RuleNew;
}
export declare class CreateRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createRule200ApplicationJsonObject?: CreateRule200ApplicationJson;
}
