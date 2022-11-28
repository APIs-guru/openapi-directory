import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddDellSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddDellSwitchRequest extends SpeakeasyBase {
    request?: shared.DellSwitchDataSourceRequest;
    security: AddDellSwitchSecurity;
}
export declare class AddDellSwitchResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    dellSwitchDataSource?: shared.DellSwitchDataSource;
    statusCode: number;
}
