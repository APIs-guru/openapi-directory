import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCiscoSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCiscoSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetCiscoSwitchRequest extends SpeakeasyBase {
    pathParams: GetCiscoSwitchPathParams;
    security: GetCiscoSwitchSecurity;
}
export declare class GetCiscoSwitchResponse extends SpeakeasyBase {
    ciscoSwitchDataSource?: shared.CiscoSwitchDataSource;
    contentType: string;
    statusCode: number;
}
