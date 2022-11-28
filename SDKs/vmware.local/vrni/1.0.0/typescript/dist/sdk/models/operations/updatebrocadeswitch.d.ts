import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBrocadeSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateBrocadeSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateBrocadeSwitchRequest extends SpeakeasyBase {
    pathParams: UpdateBrocadeSwitchPathParams;
    request?: shared.SwitchDataSource;
    security: UpdateBrocadeSwitchSecurity;
}
export declare class UpdateBrocadeSwitchResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
