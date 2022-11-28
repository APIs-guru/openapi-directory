import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableBrocadeSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EnableBrocadeSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class EnableBrocadeSwitchRequest extends SpeakeasyBase {
    pathParams: EnableBrocadeSwitchPathParams;
    security: EnableBrocadeSwitchSecurity;
}
export declare class EnableBrocadeSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
