import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAristaSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetAristaSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetAristaSwitchRequest extends SpeakeasyBase {
    pathParams: GetAristaSwitchPathParams;
    security: GetAristaSwitchSecurity;
}
export declare class GetAristaSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
