import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableNsxvManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisableNsxvManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DisableNsxvManagerRequest extends SpeakeasyBase {
    pathParams: DisableNsxvManagerPathParams;
    security: DisableNsxvManagerSecurity;
}
export declare class DisableNsxvManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
