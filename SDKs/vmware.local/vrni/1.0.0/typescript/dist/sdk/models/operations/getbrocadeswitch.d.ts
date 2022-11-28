import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBrocadeSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBrocadeSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetBrocadeSwitchRequest extends SpeakeasyBase {
    pathParams: GetBrocadeSwitchPathParams;
    security: GetBrocadeSwitchSecurity;
}
export declare class GetBrocadeSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
