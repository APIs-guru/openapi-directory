import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTechniqueVersionDirectivesPathParams extends SpeakeasyBase {
    techniqueName: string;
    techniqueVersion: string;
}
export declare enum ListTechniqueVersionDirectives200ApplicationJsonActionEnum {
    ListTechniqueDirectives = "listTechniqueDirectives"
}
export declare class ListTechniqueVersionDirectives200ApplicationJsonData extends SpeakeasyBase {
    directives: shared.Directive[];
}
export declare enum ListTechniqueVersionDirectives200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ListTechniqueVersionDirectives200ApplicationJson extends SpeakeasyBase {
    action: ListTechniqueVersionDirectives200ApplicationJsonActionEnum;
    data: ListTechniqueVersionDirectives200ApplicationJsonData;
    result: ListTechniqueVersionDirectives200ApplicationJsonResultEnum;
}
export declare class ListTechniqueVersionDirectivesRequest extends SpeakeasyBase {
    pathParams: ListTechniqueVersionDirectivesPathParams;
}
export declare class ListTechniqueVersionDirectivesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listTechniqueVersionDirectives200ApplicationJsonObject?: ListTechniqueVersionDirectives200ApplicationJson;
}
