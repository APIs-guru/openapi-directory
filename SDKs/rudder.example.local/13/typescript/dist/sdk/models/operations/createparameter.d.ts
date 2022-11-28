import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateParameter200ApplicationJsonActionEnum {
    CreateParameter = "createParameter"
}
/**
 * Parameters
**/
export declare class CreateParameter200ApplicationJsonData extends SpeakeasyBase {
    parameters: shared.Parameter[];
}
export declare enum CreateParameter200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class CreateParameter200ApplicationJson extends SpeakeasyBase {
    action: CreateParameter200ApplicationJsonActionEnum;
    data: CreateParameter200ApplicationJsonData;
    id: string;
    result: CreateParameter200ApplicationJsonResultEnum;
}
export declare class CreateParameterRequest extends SpeakeasyBase {
    request: shared.Parameter;
}
export declare class CreateParameterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createParameter200ApplicationJsonObject?: CreateParameter200ApplicationJson;
}
