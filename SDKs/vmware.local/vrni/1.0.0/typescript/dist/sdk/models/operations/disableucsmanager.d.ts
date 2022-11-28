import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableUcsManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisableUcsManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DisableUcsManagerRequest extends SpeakeasyBase {
    pathParams: DisableUcsManagerPathParams;
    security: DisableUcsManagerSecurity;
}
export declare class DisableUcsManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
