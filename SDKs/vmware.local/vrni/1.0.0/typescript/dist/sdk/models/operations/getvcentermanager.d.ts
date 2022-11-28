import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVcenterManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVcenterManagerQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetVcenterManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetVcenterManagerRequest extends SpeakeasyBase {
    pathParams: GetVcenterManagerPathParams;
    queryParams: GetVcenterManagerQueryParams;
    security: GetVcenterManagerSecurity;
}
export declare class GetVcenterManagerResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    vCenterManager?: shared.VCenterManager;
}
