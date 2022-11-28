import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDomainPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetDomainQueryParams extends SpeakeasyBase {
    teamId?: string;
}
export declare class GetDomain200ApplicationJsonDomainAliases extends SpeakeasyBase {
    alias: string;
    created: number;
    id: string;
}
export declare class GetDomain200ApplicationJsonDomainCerts extends SpeakeasyBase {
    cns: string[];
    created: number;
    id: string;
}
/**
 * Information about who added the domain
**/
export declare class GetDomain200ApplicationJsonDomainCreator extends SpeakeasyBase {
    customerId?: string;
    email: string;
    id: string;
    isDomainReseller?: boolean;
    username: string;
}
export declare enum GetDomain200ApplicationJsonDomainServiceTypeEnum {
    ZeitWorld = "zeit.world",
    External = "external",
    Na = "na"
}
/**
 * The domain information
**/
export declare class GetDomain200ApplicationJsonDomain extends SpeakeasyBase {
    aliases: GetDomain200ApplicationJsonDomainAliases[];
    boughtAt: number;
    cdnEnabled: boolean;
    certs: GetDomain200ApplicationJsonDomainCerts[];
    createdAt: number;
    creator: GetDomain200ApplicationJsonDomainCreator;
    expiresAt: number;
    id: string;
    intendedNameservers: string[];
    name: string;
    nameservers: string[];
    nsVerifiedAt: number;
    orderedAt?: number;
    serviceType: GetDomain200ApplicationJsonDomainServiceTypeEnum;
    suffix: boolean;
    transferredAt?: number;
    txtVerifiedAt: number;
    verificationRecord: string;
    verified: boolean;
}
export declare class GetDomain200ApplicationJson extends SpeakeasyBase {
    domain: GetDomain200ApplicationJsonDomain;
}
export declare enum GetDomain404ApplicationJsonErrorCodeEnum {
    NotFound = "not_found"
}
export declare class GetDomain404ApplicationJsonError extends SpeakeasyBase {
    code: GetDomain404ApplicationJsonErrorCodeEnum;
    message: string;
    name: string;
}
export declare class GetDomain404ApplicationJson extends SpeakeasyBase {
    error: GetDomain404ApplicationJsonError;
}
export declare class GetDomainRequest extends SpeakeasyBase {
    pathParams: GetDomainPathParams;
    queryParams: GetDomainQueryParams;
}
export declare class GetDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDomain200ApplicationJsonObject?: GetDomain200ApplicationJson;
    getDomain404ApplicationJsonObject?: GetDomain404ApplicationJson;
}
