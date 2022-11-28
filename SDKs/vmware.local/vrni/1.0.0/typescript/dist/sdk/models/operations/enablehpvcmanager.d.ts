import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableHpvcManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EnableHpvcManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class EnableHpvcManagerRequest extends SpeakeasyBase {
    pathParams: EnableHpvcManagerPathParams;
    security: EnableHpvcManagerSecurity;
}
export declare class EnableHpvcManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
