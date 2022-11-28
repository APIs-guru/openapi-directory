import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListParameters200ApplicationJsonActionEnum {
    ListParameters = "listParameters"
}
/**
 * Parameters
**/
export declare class ListParameters200ApplicationJsonData extends SpeakeasyBase {
    parameters: shared.Parameter[];
}
export declare enum ListParameters200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ListParameters200ApplicationJson extends SpeakeasyBase {
    action: ListParameters200ApplicationJsonActionEnum;
    data: ListParameters200ApplicationJsonData;
    result: ListParameters200ApplicationJsonResultEnum;
}
export declare class ListParametersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listParameters200ApplicationJsonObject?: ListParameters200ApplicationJson;
}
