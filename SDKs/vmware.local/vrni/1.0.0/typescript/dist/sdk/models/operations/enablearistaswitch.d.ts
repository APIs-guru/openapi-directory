import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableAristaSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EnableAristaSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class EnableAristaSwitchRequest extends SpeakeasyBase {
    pathParams: EnableAristaSwitchPathParams;
    security: EnableAristaSwitchSecurity;
}
export declare class EnableAristaSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
