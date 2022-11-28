import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateVcenterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateVcenterSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateVcenterRequest extends SpeakeasyBase {
    pathParams: UpdateVcenterPathParams;
    request?: shared.VCenterDataSource;
    security: UpdateVcenterSecurity;
}
export declare class UpdateVcenterResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    vCenterDataSource?: shared.VCenterDataSource;
}
