import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostClientRequestBody extends SpeakeasyBase {
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
export declare class PostClientRequest extends SpeakeasyBase {
    request?: PostClientRequestBody;
}
export declare class PostClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
