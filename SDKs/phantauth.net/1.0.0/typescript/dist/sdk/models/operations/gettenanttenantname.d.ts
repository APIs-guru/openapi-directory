import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTenantTenantnamePathParams extends SpeakeasyBase {
    tenantname: string;
}
export declare class GetTenantTenantname200ApplicationJson extends SpeakeasyBase {
    atId?: string;
    about?: string;
    attribution?: string;
    depot?: string;
    depots?: any[];
    domain?: boolean;
    factories?: any[];
    factory?: string;
    favicon?: string;
    issuer: string;
    logo?: string;
    name?: string;
    script?: string;
    sheet?: string;
    sub: string;
    subtenant?: boolean;
    summary?: string;
    template?: string;
    theme?: string;
    userinfo?: string;
    website?: string;
}
export declare class GetTenantTenantnameRequest extends SpeakeasyBase {
    pathParams: GetTenantTenantnamePathParams;
}
export declare class GetTenantTenantnameResponse extends SpeakeasyBase {
    contentType: string;
    getTenantTenantname200ApplicationJsonObject?: GetTenantTenantname200ApplicationJson;
    statusCode: number;
}
