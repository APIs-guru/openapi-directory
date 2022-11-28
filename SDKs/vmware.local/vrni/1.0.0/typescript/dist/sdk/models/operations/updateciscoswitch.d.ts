import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCiscoSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateCiscoSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateCiscoSwitchRequest extends SpeakeasyBase {
    pathParams: UpdateCiscoSwitchPathParams;
    request?: shared.CiscoSwitchDataSource;
    security: UpdateCiscoSwitchSecurity;
}
export declare class UpdateCiscoSwitchResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    ciscoSwitchDataSource?: shared.CiscoSwitchDataSource;
    contentType: string;
    statusCode: number;
}
