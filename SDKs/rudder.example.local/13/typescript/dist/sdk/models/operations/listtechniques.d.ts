import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTechniques200ApplicationJsonActionEnum {
    ListTechniques = "listTechniques"
}
export declare class ListTechniques200ApplicationJsonData extends SpeakeasyBase {
    techniques: shared.Techniques[];
}
export declare enum ListTechniques200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ListTechniques200ApplicationJson extends SpeakeasyBase {
    action: ListTechniques200ApplicationJsonActionEnum;
    data: ListTechniques200ApplicationJsonData;
    result: ListTechniques200ApplicationJsonResultEnum;
}
export declare class ListTechniquesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listTechniques200ApplicationJsonObject?: ListTechniques200ApplicationJson;
}
