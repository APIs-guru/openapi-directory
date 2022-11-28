import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateNsxvControllerClusterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateNsxvControllerClusterSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateNsxvControllerClusterRequest extends SpeakeasyBase {
    pathParams: UpdateNsxvControllerClusterPathParams;
    request?: shared.NsxControllerDataCollection;
    security: UpdateNsxvControllerClusterSecurity;
}
export declare class UpdateNsxvControllerClusterResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    nsxControllerDataCollection?: shared.NsxControllerDataCollection;
    statusCode: number;
}
