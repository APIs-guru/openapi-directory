import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Client {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getClientClientId - Get a Client
     *
     * Use this endpoint to generate a random client. The client is generated in a deterministic way, on the bases of the client ID given as a path parameter.
     * In the case of identical client IDs, the endpoint will generate the same client object. The properties of the generated client object are randomly generated on the basis of the client ID.
     * In lack of a client ID, all calls generate a different client object to the randomly generated client ID.
     *
     * By providing an email address as the `client_id` parameter, you can customize the client logo by the use of the gravatar associated with the email address.
     *
     * If the `client_id` parameter contains minimum one dot (`.`) or space (` `) character, the client_name is produced from the parameter, rather than being generated.`
     *
     * The result is always a client object. If you want to generate multiple clients in one single step, you can do it by the use of *Fleet* generation.
     * The members of a fleet are clients randomly generated from the fleet name.
    **/
    getClientClientId(req: operations.GetClientClientIdRequest, config?: AxiosRequestConfig): Promise<operations.GetClientClientIdResponse>;
    /**
     * getClientClientIdTokenKind - Get a Client Token
     *
     * It is used to generate a OpenID Connect token as a path parameter to a client of a given client ID.
     *
     * It is primarily used for testing purposes, when, for example, the token from the standard authentication flow is not available to the test code.
    **/
    getClientClientIdTokenKind(req: operations.GetClientClientIdTokenKindRequest, config?: AxiosRequestConfig): Promise<operations.GetClientClientIdTokenKindResponse>;
    /**
     * postClient - Create a Client Selfie
     *
     * To create a selfie token from the client data, you need an opaqe string token, which contains the encoded client properties sent in the request.
     * Later, the selfie token can be used as a client ID. In this case, the client data is included in the selfie token, that is, the client properties are taken from the token.
     * By the use of a selfie token, you can use your own client objects in the authentication process.
    **/
    postClient(req: operations.PostClientRequest, config?: AxiosRequestConfig): Promise<operations.PostClientResponse>;
}
