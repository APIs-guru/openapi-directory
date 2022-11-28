import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDomainsQueryParams extends SpeakeasyBase {
    teamId?: string;
}
export declare enum GetDomains200ApplicationJsonDomainsServiceTypeEnum {
    ZeitWorld = "zeit.world",
    External = "external",
    Na = "na"
}
export declare class GetDomains200ApplicationJsonDomains extends SpeakeasyBase {
    boughtAt: number;
    cdnEnabled: boolean;
    createdAt: number;
    expiresAt: number;
    id: string;
    intendedNameservers: string[];
    name: string;
    nameservers: string[];
    nsVerifiedAt: number;
    orderedAt?: number;
    serviceType: GetDomains200ApplicationJsonDomainsServiceTypeEnum;
    transferredAt?: number;
    txtVerifiedAt: number;
    verificationRecord: string;
    verified: boolean;
}
export declare class GetDomains200ApplicationJson extends SpeakeasyBase {
    domains: GetDomains200ApplicationJsonDomains[];
}
export declare class GetDomainsRequest extends SpeakeasyBase {
    queryParams: GetDomainsQueryParams;
}
export declare class GetDomainsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDomains200ApplicationJsonObject?: GetDomains200ApplicationJson;
}
