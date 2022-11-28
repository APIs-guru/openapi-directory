import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableVcenterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EnableVcenterSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class EnableVcenterRequest extends SpeakeasyBase {
    pathParams: EnableVcenterPathParams;
    security: EnableVcenterSecurity;
}
export declare class EnableVcenterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
