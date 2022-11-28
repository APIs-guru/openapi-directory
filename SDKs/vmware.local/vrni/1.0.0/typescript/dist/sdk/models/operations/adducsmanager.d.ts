import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddUcsManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddUcsManagerRequest extends SpeakeasyBase {
    request?: shared.SwitchDataSource;
    security: AddUcsManagerSecurity;
}
export declare class AddUcsManagerResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
