import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckDirectivePathParams extends SpeakeasyBase {
    directiveId: string;
}
export declare enum CheckDirective200ApplicationJsonActionEnum {
    CheckDirective = "checkDirective"
}
export declare class CheckDirective200ApplicationJsonData extends SpeakeasyBase {
    directives: shared.Directive[];
}
export declare enum CheckDirective200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class CheckDirective200ApplicationJson extends SpeakeasyBase {
    action: CheckDirective200ApplicationJsonActionEnum;
    data: CheckDirective200ApplicationJsonData;
    result: CheckDirective200ApplicationJsonResultEnum;
}
export declare class CheckDirectiveRequest extends SpeakeasyBase {
    pathParams: CheckDirectivePathParams;
    request: shared.Directive;
}
export declare class CheckDirectiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkDirective200ApplicationJsonObject?: CheckDirective200ApplicationJson;
}
