import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddCiscoSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddCiscoSwitchRequest extends SpeakeasyBase {
    request?: shared.CiscoSwitchDataSourceRequest;
    security: AddCiscoSwitchSecurity;
}
export declare class AddCiscoSwitchResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    ciscoSwitchDataSource?: shared.CiscoSwitchDataSource;
    contentType: string;
    statusCode: number;
}
