import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSuperfundsQueryParams extends SpeakeasyBase {
    order?: string;
    page?: number;
    where?: string;
}
export declare class GetSuperfundsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    xeroTenantId: string;
}
export declare class GetSuperfundsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSuperfundsRequest extends SpeakeasyBase {
    queryParams: GetSuperfundsQueryParams;
    headers: GetSuperfundsHeaders;
    security: GetSuperfundsSecurity;
}
export declare class GetSuperfundsResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    statusCode: number;
    superFunds?: shared.SuperFunds;
}
