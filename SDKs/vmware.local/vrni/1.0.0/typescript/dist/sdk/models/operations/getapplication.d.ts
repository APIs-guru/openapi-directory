import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApplicationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApplicationSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetApplicationRequest extends SpeakeasyBase {
    pathParams: GetApplicationPathParams;
    security: GetApplicationSecurity;
}
export declare class GetApplicationResponse extends SpeakeasyBase {
    application?: shared.Application;
    contentType: string;
    statusCode: number;
}
