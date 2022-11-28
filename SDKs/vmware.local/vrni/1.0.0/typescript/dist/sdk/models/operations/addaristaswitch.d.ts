import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddAristaSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddAristaSwitchRequest extends SpeakeasyBase {
    request?: shared.SwitchDataSourceRequest;
    security: AddAristaSwitchSecurity;
}
export declare class AddAristaSwitchResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
