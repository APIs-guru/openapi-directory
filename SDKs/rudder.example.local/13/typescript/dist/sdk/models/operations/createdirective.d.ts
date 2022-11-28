import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDirective200ApplicationJsonActionEnum {
    CreateDirective = "createDirective"
}
export declare class CreateDirective200ApplicationJsonData extends SpeakeasyBase {
    directives: shared.Directive[];
}
export declare enum CreateDirective200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class CreateDirective200ApplicationJson extends SpeakeasyBase {
    action: CreateDirective200ApplicationJsonActionEnum;
    data: CreateDirective200ApplicationJsonData;
    result: CreateDirective200ApplicationJsonResultEnum;
}
export declare class CreateDirectiveRequest extends SpeakeasyBase {
    request?: shared.DirectiveNew;
}
export declare class CreateDirectiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createDirective200ApplicationJsonObject?: CreateDirective200ApplicationJson;
}
