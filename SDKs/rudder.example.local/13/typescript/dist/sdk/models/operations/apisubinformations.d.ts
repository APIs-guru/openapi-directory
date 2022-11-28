import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiSubInformationsPathParams extends SpeakeasyBase {
    sectionId: string;
}
export declare enum ApiSubInformations200ApplicationJsonActionEnum {
    ApiSubInformations = "apiSubInformations"
}
export declare class ApiSubInformations200ApplicationJsonData extends SpeakeasyBase {
    availableVersions: shared.ApiVersions[];
    documentation: string;
    endpoints: shared.ApiEndpoints[][];
}
export declare enum ApiSubInformations200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ApiSubInformations200ApplicationJson extends SpeakeasyBase {
    action: ApiSubInformations200ApplicationJsonActionEnum;
    data: ApiSubInformations200ApplicationJsonData;
    result: ApiSubInformations200ApplicationJsonResultEnum;
}
export declare class ApiSubInformationsRequest extends SpeakeasyBase {
    pathParams: ApiSubInformationsPathParams;
}
export declare class ApiSubInformationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiSubInformations200ApplicationJsonObject?: ApiSubInformations200ApplicationJson;
}
