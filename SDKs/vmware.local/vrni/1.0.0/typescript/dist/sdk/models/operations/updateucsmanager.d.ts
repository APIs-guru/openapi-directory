import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUcsManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateUcsManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateUcsManagerRequest extends SpeakeasyBase {
    pathParams: UpdateUcsManagerPathParams;
    request?: shared.SwitchDataSource;
    security: UpdateUcsManagerSecurity;
}
export declare class UpdateUcsManagerResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
