import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNsxvControllerClusterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetNsxvControllerClusterSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetNsxvControllerClusterRequest extends SpeakeasyBase {
    pathParams: GetNsxvControllerClusterPathParams;
    security: GetNsxvControllerClusterSecurity;
}
export declare class GetNsxvControllerClusterResponse extends SpeakeasyBase {
    contentType: string;
    nsxControllerDataCollection?: shared.NsxControllerDataCollection;
    statusCode: number;
}
