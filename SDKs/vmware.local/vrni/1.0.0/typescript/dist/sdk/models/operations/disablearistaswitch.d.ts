import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableAristaSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisableAristaSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DisableAristaSwitchRequest extends SpeakeasyBase {
    pathParams: DisableAristaSwitchPathParams;
    security: DisableAristaSwitchSecurity;
}
export declare class DisableAristaSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
