import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUcsManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetUcsManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetUcsManagerRequest extends SpeakeasyBase {
    pathParams: GetUcsManagerPathParams;
    security: GetUcsManagerSecurity;
}
export declare class GetUcsManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
