import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRulePathParams extends SpeakeasyBase {
    ruleId: string;
}
export declare enum DeleteRule200ApplicationJsonActionEnum {
    DeleteRule = "deleteRule"
}
export declare class DeleteRule200ApplicationJsonData extends SpeakeasyBase {
    rules: shared.Rule[];
}
export declare enum DeleteRule200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class DeleteRule200ApplicationJson extends SpeakeasyBase {
    action: DeleteRule200ApplicationJsonActionEnum;
    data: DeleteRule200ApplicationJsonData;
    result: DeleteRule200ApplicationJsonResultEnum;
}
export declare class DeleteRuleRequest extends SpeakeasyBase {
    pathParams: DeleteRulePathParams;
}
export declare class DeleteRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteRule200ApplicationJsonObject?: DeleteRule200ApplicationJson;
}
