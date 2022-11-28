import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiInformationsPathParams extends SpeakeasyBase {
    endpointName: string;
}
export declare enum ApiInformations200ApplicationJsonActionEnum {
    ApiInformations = "apiInformations"
}
/**
 * Supported path and version for that endpoint
**/
export declare class ApiInformations200ApplicationJsonDataEndpoints extends SpeakeasyBase {
    httpVerb?: any;
    version?: shared.ApiVersion;
}
export declare class ApiInformations200ApplicationJsonData extends SpeakeasyBase {
    documentation: string;
    endpointName: string;
    endpoints: ApiInformations200ApplicationJsonDataEndpoints[];
}
export declare enum ApiInformations200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ApiInformations200ApplicationJson extends SpeakeasyBase {
    action: ApiInformations200ApplicationJsonActionEnum;
    data: ApiInformations200ApplicationJsonData;
    result: ApiInformations200ApplicationJsonResultEnum;
}
export declare class ApiInformationsRequest extends SpeakeasyBase {
    pathParams: ApiInformationsPathParams;
}
export declare class ApiInformationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiInformations200ApplicationJsonObject?: ApiInformations200ApplicationJson;
}
