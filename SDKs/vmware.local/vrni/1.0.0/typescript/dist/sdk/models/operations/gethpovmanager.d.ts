import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHpovManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetHpovManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetHpovManagerRequest extends SpeakeasyBase {
    pathParams: GetHpovManagerPathParams;
    security: GetHpovManagerSecurity;
}
export declare class GetHpovManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
