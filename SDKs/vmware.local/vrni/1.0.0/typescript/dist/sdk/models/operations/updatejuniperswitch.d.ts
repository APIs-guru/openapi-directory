import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateJuniperSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateJuniperSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateJuniperSwitchRequest extends SpeakeasyBase {
    pathParams: UpdateJuniperSwitchPathParams;
    request?: shared.SwitchDataSource;
    security: UpdateJuniperSwitchSecurity;
}
export declare class UpdateJuniperSwitchResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
