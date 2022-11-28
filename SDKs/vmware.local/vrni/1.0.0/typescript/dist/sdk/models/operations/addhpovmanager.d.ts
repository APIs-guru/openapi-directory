import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddHpovManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddHpovManagerRequest extends SpeakeasyBase {
    request?: shared.SwitchDataSource;
    security: AddHpovManagerSecurity;
}
export declare class AddHpovManagerResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
