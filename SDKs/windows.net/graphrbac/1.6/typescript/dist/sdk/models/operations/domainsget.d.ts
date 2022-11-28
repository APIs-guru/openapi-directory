import { SpeakeasyBase } from "../../../internal/utils";
export declare class DomainsGetPathParams extends SpeakeasyBase {
    domainName: string;
    tenantId: string;
}
export declare class DomainsGetQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class DomainsGetRequest extends SpeakeasyBase {
    pathParams: DomainsGetPathParams;
    queryParams: DomainsGetQueryParams;
}
export declare class DomainsGetResponse extends SpeakeasyBase {
    contentType: string;
    domain?: Map<string, Map<string, any>>;
    statusCode: number;
}
