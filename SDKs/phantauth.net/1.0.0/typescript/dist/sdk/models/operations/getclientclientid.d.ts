import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetClientClientIdPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class GetClientClientIdRequest extends SpeakeasyBase {
    pathParams: GetClientClientIdPathParams;
}
export declare class GetClientClientId200ApplicationJson extends SpeakeasyBase {
    atId?: string;
    clientId: string;
    clientName?: string;
    clientSecret?: string;
    clientUri?: string;
    contacts?: any[];
    grantTypes?: any[];
    jwks?: any[];
    jwksUri?: string;
    logoEmail?: string;
    logoUri?: string;
    policyUri?: string;
    redirectUris?: any[];
    responseTypes?: any[];
    scope?: string;
    softwareId?: string;
    softwareVersion?: string;
    tokenEndpointAuthMethod?: string;
    tosUri?: string;
}
export declare class GetClientClientIdResponse extends SpeakeasyBase {
    contentType: string;
    getClientClientId200ApplicationJsonObject?: GetClientClientId200ApplicationJson;
    statusCode: number;
}
