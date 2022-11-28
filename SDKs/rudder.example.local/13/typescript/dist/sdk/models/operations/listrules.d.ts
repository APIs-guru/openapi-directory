import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListRules200ApplicationJsonActionEnum {
    ListRules = "listRules"
}
export declare class ListRules200ApplicationJsonData extends SpeakeasyBase {
    rules: shared.Rule[];
}
export declare enum ListRules200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ListRules200ApplicationJson extends SpeakeasyBase {
    action: ListRules200ApplicationJsonActionEnum;
    data: ListRules200ApplicationJsonData;
    result: ListRules200ApplicationJsonResultEnum;
}
export declare class ListRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listRules200ApplicationJsonObject?: ListRules200ApplicationJson;
}
