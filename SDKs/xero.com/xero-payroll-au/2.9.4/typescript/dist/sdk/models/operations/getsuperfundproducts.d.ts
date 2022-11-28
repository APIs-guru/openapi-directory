import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSuperfundProductsQueryParams extends SpeakeasyBase {
    abn?: string;
    usi?: string;
}
export declare class GetSuperfundProductsHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetSuperfundProductsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSuperfundProductsRequest extends SpeakeasyBase {
    queryParams: GetSuperfundProductsQueryParams;
    headers: GetSuperfundProductsHeaders;
    security: GetSuperfundProductsSecurity;
}
export declare class GetSuperfundProductsResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    statusCode: number;
    superFundProducts?: shared.SuperFundProducts;
}
