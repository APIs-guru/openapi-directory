import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAristaSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateAristaSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateAristaSwitchRequest extends SpeakeasyBase {
    pathParams: UpdateAristaSwitchPathParams;
    request?: shared.SwitchDataSource;
    security: UpdateAristaSwitchSecurity;
}
export declare class UpdateAristaSwitchResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
