import { SpeakeasyBase } from "../../../internal/utils";
export declare class OauthV1OpenidDiscovery extends SpeakeasyBase {
    authorizationEndpoint?: string;
    claimsSupported?: string[];
    deviceAuthorizationEndpoint?: string;
    idTokenSigningAlgValuesSupported?: string[];
    issuer?: string;
    jwkUri?: string;
    responseTypeSupported?: string[];
    revocationEndpoint?: string;
    scopesSupported?: string[];
    subjectTypeSupported?: string[];
    tokenEndpoint?: string;
    url?: string;
    userinfoEndpoint?: string;
}
