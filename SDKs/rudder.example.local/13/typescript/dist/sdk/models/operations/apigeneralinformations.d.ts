import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ApiGeneralInformations200ApplicationJsonActionEnum {
    ApiGeneralInformations = "apiGeneralInformations"
}
export declare class ApiGeneralInformations200ApplicationJsonData extends SpeakeasyBase {
    availableVersions: shared.ApiVersions[];
    documentation: string;
    endpoints: shared.ApiEndpoints[][];
}
export declare enum ApiGeneralInformations200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ApiGeneralInformations200ApplicationJson extends SpeakeasyBase {
    action: ApiGeneralInformations200ApplicationJsonActionEnum;
    data: ApiGeneralInformations200ApplicationJsonData;
    result: ApiGeneralInformations200ApplicationJsonResultEnum;
}
export declare class ApiGeneralInformationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiGeneralInformations200ApplicationJsonObject?: ApiGeneralInformations200ApplicationJson;
}
