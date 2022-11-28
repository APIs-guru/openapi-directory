import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddJuniperSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddJuniperSwitchRequest extends SpeakeasyBase {
    request?: shared.SwitchDataSourceRequest;
    security: AddJuniperSwitchSecurity;
}
export declare class AddJuniperSwitchResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
