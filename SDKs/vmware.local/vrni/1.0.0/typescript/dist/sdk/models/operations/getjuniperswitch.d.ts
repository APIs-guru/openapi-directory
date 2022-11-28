import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJuniperSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetJuniperSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetJuniperSwitchRequest extends SpeakeasyBase {
    pathParams: GetJuniperSwitchPathParams;
    security: GetJuniperSwitchSecurity;
}
export declare class GetJuniperSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
