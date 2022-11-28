import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatacenterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDatacenterQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetDatacenterSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetDatacenterRequest extends SpeakeasyBase {
    pathParams: GetDatacenterPathParams;
    queryParams: GetDatacenterQueryParams;
    security: GetDatacenterSecurity;
}
export declare class GetDatacenterResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    vcDatacenter?: shared.VcDatacenter;
}
