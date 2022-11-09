import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetDomainDomainnamePathParams extends SpeakeasyBase {
    domainname: string;
}
export declare class GetDomainDomainnameRequest extends SpeakeasyBase {
    pathParams: GetDomainDomainnamePathParams;
}
export declare class GetDomainDomainname200ApplicationJson extends SpeakeasyBase {
    atId?: string;
    logo?: string;
    members?: any[];
    name?: string;
    profile?: string;
    sub?: string;
}
export declare class GetDomainDomainnameResponse extends SpeakeasyBase {
    contentType: string;
    getDomainDomainname200ApplicationJsonObject?: GetDomainDomainname200ApplicationJson;
    statusCode: number;
}
