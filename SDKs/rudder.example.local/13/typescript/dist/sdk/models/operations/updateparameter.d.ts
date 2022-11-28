import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateParameterPathParams extends SpeakeasyBase {
    parameterId: string;
}
export declare enum UpdateParameter200ApplicationJsonActionEnum {
    UpdateParameter = "updateParameter"
}
/**
 * Parameters
**/
export declare class UpdateParameter200ApplicationJsonData extends SpeakeasyBase {
    parameters: shared.Parameter[];
}
export declare enum UpdateParameter200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateParameter200ApplicationJson extends SpeakeasyBase {
    action: UpdateParameter200ApplicationJsonActionEnum;
    data: UpdateParameter200ApplicationJsonData;
    id: string;
    result: UpdateParameter200ApplicationJsonResultEnum;
}
export declare class UpdateParameterRequest extends SpeakeasyBase {
    pathParams: UpdateParameterPathParams;
}
export declare class UpdateParameterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateParameter200ApplicationJsonObject?: UpdateParameter200ApplicationJson;
}
