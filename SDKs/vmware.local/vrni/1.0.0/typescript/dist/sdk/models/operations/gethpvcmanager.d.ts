import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHpvcManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetHpvcManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetHpvcManagerRequest extends SpeakeasyBase {
    pathParams: GetHpvcManagerPathParams;
    security: GetHpvcManagerSecurity;
}
export declare class GetHpvcManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
