import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableVcenterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisableVcenterSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DisableVcenterRequest extends SpeakeasyBase {
    pathParams: DisableVcenterPathParams;
    security: DisableVcenterSecurity;
}
export declare class DisableVcenterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
