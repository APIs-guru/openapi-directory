import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddHpvcManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddHpvcManagerRequest extends SpeakeasyBase {
    request?: shared.SwitchDataSource;
    security: AddHpvcManagerSecurity;
}
export declare class AddHpvcManagerResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
