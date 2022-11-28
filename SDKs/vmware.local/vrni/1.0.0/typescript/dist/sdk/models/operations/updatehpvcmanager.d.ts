import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateHpvcManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateHpvcManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateHpvcManagerRequest extends SpeakeasyBase {
    pathParams: UpdateHpvcManagerPathParams;
    request?: shared.SwitchDataSource;
    security: UpdateHpvcManagerSecurity;
}
export declare class UpdateHpvcManagerResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
