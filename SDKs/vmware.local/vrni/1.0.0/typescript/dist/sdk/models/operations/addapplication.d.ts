import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddApplicationSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddApplicationRequest extends SpeakeasyBase {
    request: shared.ApplicationRequest;
    security: AddApplicationSecurity;
}
export declare class AddApplicationResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    application?: shared.Application;
    contentType: string;
    statusCode: number;
}
