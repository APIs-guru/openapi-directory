import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDellSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDellSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetDellSwitchRequest extends SpeakeasyBase {
    pathParams: GetDellSwitchPathParams;
    security: GetDellSwitchSecurity;
}
export declare class GetDellSwitchResponse extends SpeakeasyBase {
    contentType: string;
    dellSwitchDataSource?: shared.DellSwitchDataSource;
    statusCode: number;
}
