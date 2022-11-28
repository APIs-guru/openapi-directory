import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVcenterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteVcenterSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteVcenterRequest extends SpeakeasyBase {
    pathParams: DeleteVcenterPathParams;
    security: DeleteVcenterSecurity;
}
export declare class DeleteVcenterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
