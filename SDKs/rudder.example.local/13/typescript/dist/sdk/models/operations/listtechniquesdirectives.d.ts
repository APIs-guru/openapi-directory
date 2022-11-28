import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTechniquesDirectivesPathParams extends SpeakeasyBase {
    techniqueName: string;
}
export declare enum ListTechniquesDirectives200ApplicationJsonActionEnum {
    ListTechniquesDirectives = "listTechniquesDirectives"
}
export declare class ListTechniquesDirectives200ApplicationJsonData extends SpeakeasyBase {
    directives: shared.Directive[];
}
export declare enum ListTechniquesDirectives200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ListTechniquesDirectives200ApplicationJson extends SpeakeasyBase {
    action: ListTechniquesDirectives200ApplicationJsonActionEnum;
    data: ListTechniquesDirectives200ApplicationJsonData;
    result: ListTechniquesDirectives200ApplicationJsonResultEnum;
}
export declare class ListTechniquesDirectivesRequest extends SpeakeasyBase {
    pathParams: ListTechniquesDirectivesPathParams;
}
export declare class ListTechniquesDirectivesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listTechniquesDirectives200ApplicationJsonObject?: ListTechniquesDirectives200ApplicationJson;
}
