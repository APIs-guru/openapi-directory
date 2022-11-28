import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDirectivePathParams extends SpeakeasyBase {
    directiveId: string;
}
export declare enum DeleteDirective200ApplicationJsonActionEnum {
    DeleteDirective = "deleteDirective"
}
export declare class DeleteDirective200ApplicationJsonData extends SpeakeasyBase {
    directives: shared.Directive[];
}
export declare enum DeleteDirective200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class DeleteDirective200ApplicationJson extends SpeakeasyBase {
    action: DeleteDirective200ApplicationJsonActionEnum;
    data: DeleteDirective200ApplicationJsonData;
    result: DeleteDirective200ApplicationJsonResultEnum;
}
export declare class DeleteDirectiveRequest extends SpeakeasyBase {
    pathParams: DeleteDirectivePathParams;
}
export declare class DeleteDirectiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteDirective200ApplicationJsonObject?: DeleteDirective200ApplicationJson;
}
