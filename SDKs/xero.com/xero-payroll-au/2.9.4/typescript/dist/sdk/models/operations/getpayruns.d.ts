import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayRunsQueryParams extends SpeakeasyBase {
    order?: string;
    page?: number;
    where?: string;
}
export declare class GetPayRunsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    xeroTenantId: string;
}
export declare class GetPayRunsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetPayRunsRequest extends SpeakeasyBase {
    queryParams: GetPayRunsQueryParams;
    headers: GetPayRunsHeaders;
    security: GetPayRunsSecurity;
}
export declare class GetPayRunsResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    payRuns?: shared.PayRuns;
    statusCode: number;
}
