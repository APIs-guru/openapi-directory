import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteParameterPathParams extends SpeakeasyBase {
    parameterId: string;
}
export declare enum DeleteParameter200ApplicationJsonActionEnum {
    DeleteParameter = "deleteParameter"
}
/**
 * Parameters
**/
export declare class DeleteParameter200ApplicationJsonData extends SpeakeasyBase {
    parameters: shared.Parameter[];
}
export declare enum DeleteParameter200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class DeleteParameter200ApplicationJson extends SpeakeasyBase {
    action: DeleteParameter200ApplicationJsonActionEnum;
    data: DeleteParameter200ApplicationJsonData;
    id: string;
    result: DeleteParameter200ApplicationJsonResultEnum;
}
export declare enum DeleteParameter500ApplicationJsonActionEnum {
    DeleteParameter = "deleteParameter"
}
export declare enum DeleteParameter500ApplicationJsonResultEnum {
    Error = "error"
}
export declare class DeleteParameter500ApplicationJson extends SpeakeasyBase {
    action: DeleteParameter500ApplicationJsonActionEnum;
    errorDetails?: string;
    id: string;
    result: DeleteParameter500ApplicationJsonResultEnum;
}
export declare class DeleteParameterRequest extends SpeakeasyBase {
    pathParams: DeleteParameterPathParams;
}
export declare class DeleteParameterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteParameter200ApplicationJsonObject?: DeleteParameter200ApplicationJson;
    deleteParameter500ApplicationJsonObject?: DeleteParameter500ApplicationJson;
}
