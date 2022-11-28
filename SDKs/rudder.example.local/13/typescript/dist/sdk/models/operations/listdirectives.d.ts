import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListDirectives200ApplicationJsonActionEnum {
    ListDirectives = "listDirectives"
}
export declare class ListDirectives200ApplicationJsonData extends SpeakeasyBase {
    directives: shared.Directive[];
}
export declare enum ListDirectives200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ListDirectives200ApplicationJson extends SpeakeasyBase {
    action: ListDirectives200ApplicationJsonActionEnum;
    data: ListDirectives200ApplicationJsonData;
    result: ListDirectives200ApplicationJsonResultEnum;
}
export declare class ListDirectivesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listDirectives200ApplicationJsonObject?: ListDirectives200ApplicationJson;
}
