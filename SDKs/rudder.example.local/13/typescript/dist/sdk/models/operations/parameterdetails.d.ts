import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ParameterDetailsPathParams extends SpeakeasyBase {
    parameterId: string;
}
export declare enum ParameterDetails200ApplicationJsonActionEnum {
    ParameterDetails = "parameterDetails"
}
/**
 * Parameters
**/
export declare class ParameterDetails200ApplicationJsonData extends SpeakeasyBase {
    parameters: shared.Parameter[];
}
export declare enum ParameterDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ParameterDetails200ApplicationJson extends SpeakeasyBase {
    action: ParameterDetails200ApplicationJsonActionEnum;
    data: ParameterDetails200ApplicationJsonData;
    id: string;
    result: ParameterDetails200ApplicationJsonResultEnum;
}
export declare class ParameterDetailsRequest extends SpeakeasyBase {
    pathParams: ParameterDetailsPathParams;
}
export declare class ParameterDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    parameterDetails200ApplicationJsonObject?: ParameterDetails200ApplicationJson;
}
