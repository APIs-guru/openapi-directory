import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableCiscoSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EnableCiscoSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class EnableCiscoSwitchRequest extends SpeakeasyBase {
    pathParams: EnableCiscoSwitchPathParams;
    security: EnableCiscoSwitchSecurity;
}
export declare class EnableCiscoSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
