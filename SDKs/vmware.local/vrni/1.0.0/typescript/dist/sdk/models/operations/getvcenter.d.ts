import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVcenterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVcenterSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetVcenterRequest extends SpeakeasyBase {
    pathParams: GetVcenterPathParams;
    security: GetVcenterSecurity;
}
export declare class GetVcenterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vCenterDataSource?: shared.VCenterDataSource;
}
