import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayItemsQueryParams extends SpeakeasyBase {
    order?: string;
    page?: number;
    where?: string;
}
export declare class GetPayItemsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    xeroTenantId: string;
}
export declare class GetPayItemsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetPayItemsRequest extends SpeakeasyBase {
    queryParams: GetPayItemsQueryParams;
    headers: GetPayItemsHeaders;
    security: GetPayItemsSecurity;
}
export declare class GetPayItemsResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    payItems?: shared.PayItems;
    statusCode: number;
}
