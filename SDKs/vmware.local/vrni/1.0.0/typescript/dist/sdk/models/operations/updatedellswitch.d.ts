import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDellSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateDellSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateDellSwitchRequest extends SpeakeasyBase {
    pathParams: UpdateDellSwitchPathParams;
    request?: shared.DellSwitchDataSource;
    security: UpdateDellSwitchSecurity;
}
export declare class UpdateDellSwitchResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    dellSwitchDataSource?: shared.DellSwitchDataSource;
    statusCode: number;
}
