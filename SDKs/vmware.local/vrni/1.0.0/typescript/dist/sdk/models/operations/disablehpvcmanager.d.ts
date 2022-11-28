import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableHpvcManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisableHpvcManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DisableHpvcManagerRequest extends SpeakeasyBase {
    pathParams: DisableHpvcManagerPathParams;
    security: DisableHpvcManagerSecurity;
}
export declare class DisableHpvcManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
