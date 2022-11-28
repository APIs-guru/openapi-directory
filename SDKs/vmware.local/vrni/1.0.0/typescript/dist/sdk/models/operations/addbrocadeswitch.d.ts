import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddBrocadeSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddBrocadeSwitchRequest extends SpeakeasyBase {
    request?: shared.SwitchDataSourceRequest;
    security: AddBrocadeSwitchSecurity;
}
export declare class AddBrocadeSwitchResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
