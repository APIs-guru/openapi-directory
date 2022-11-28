import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableHpovManagerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisableHpovManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DisableHpovManagerRequest extends SpeakeasyBase {
    pathParams: DisableHpovManagerPathParams;
    security: DisableHpovManagerSecurity;
}
export declare class DisableHpovManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
