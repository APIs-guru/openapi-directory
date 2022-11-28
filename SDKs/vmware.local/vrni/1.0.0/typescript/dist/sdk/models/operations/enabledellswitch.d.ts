import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableDellSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EnableDellSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class EnableDellSwitchRequest extends SpeakeasyBase {
    pathParams: EnableDellSwitchPathParams;
    security: EnableDellSwitchSecurity;
}
export declare class EnableDellSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
