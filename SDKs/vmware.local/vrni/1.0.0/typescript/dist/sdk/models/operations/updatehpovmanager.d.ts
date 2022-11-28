import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateHpovManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateHpovManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateHpovManagerRequest extends SpeakeasyBase {
    pathParams: UpdateHpovManagerPathParams;
    request?: shared.SwitchDataSource;
    security: UpdateHpovManagerSecurity;
}
export declare class UpdateHpovManagerResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
