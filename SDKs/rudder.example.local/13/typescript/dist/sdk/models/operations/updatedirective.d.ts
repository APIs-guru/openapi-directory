import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDirectivePathParams extends SpeakeasyBase {
    directiveId: string;
}
export declare enum UpdateDirective200ApplicationJsonActionEnum {
    UpdateDirective = "updateDirective"
}
export declare class UpdateDirective200ApplicationJsonData extends SpeakeasyBase {
    directives: shared.Directive[];
}
export declare enum UpdateDirective200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateDirective200ApplicationJson extends SpeakeasyBase {
    action: UpdateDirective200ApplicationJsonActionEnum;
    data: UpdateDirective200ApplicationJsonData;
    result: UpdateDirective200ApplicationJsonResultEnum;
}
export declare class UpdateDirectiveRequest extends SpeakeasyBase {
    pathParams: UpdateDirectivePathParams;
    request: shared.Directive;
}
export declare class UpdateDirectiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDirective200ApplicationJsonObject?: UpdateDirective200ApplicationJson;
}
