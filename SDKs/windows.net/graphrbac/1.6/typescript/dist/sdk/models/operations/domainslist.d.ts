import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsListPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class DomainsListQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    apiVersion: string;
}
export declare class DomainsListRequest extends SpeakeasyBase {
    pathParams: DomainsListPathParams;
    queryParams: DomainsListQueryParams;
}
export declare class DomainsListResponse extends SpeakeasyBase {
    contentType: string;
    domainListResult?: shared.DomainListResult;
    statusCode: number;
}
