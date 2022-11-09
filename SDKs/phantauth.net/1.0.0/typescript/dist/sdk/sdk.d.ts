import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
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
    GetClientClientId(req: operations.GetClientClientIdRequest, config?: AxiosRequestConfig): Promise<operations.GetClientClientIdResponse>;
    /**
     * It is used to generate a OpenID Connect token as a path parameter to a client of a given client ID.
     *
     * It is primarily used for testing purposes, when, for example, the token from the standard authentication flow is not available to the test code.
    **/
    GetClientClientIdTokenKind(req: operations.GetClientClientIdTokenKindRequest, config?: AxiosRequestConfig): Promise<operations.GetClientClientIdTokenKindResponse>;
    /**
     * This endpoint allows you to get the data of a given PhantAuth domain. To use the PhantAuth services, you don't need this endpoint.
     * It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
     *
     * Domainname is the fully qualified DNS name of the domain you get (e.g. *phantauth.net* or *phantauth.cf*).
    **/
    GetDomainDomainname(req: operations.GetDomainDomainnameRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainDomainnameResponse>;
    /**
     * Use this endpoint to generate a random group of clients. The feleet is generated in a deterministic way, on the basis of a fleet name given as a path parameter.
     * In the case of identical fleet names, the endpoint will generate the same fleet object. The properties of the generated fleet object are randomly generated on the basis of the fleet name.
     * In lack of a fleet name, all calls generate a different fleet object to the randomly generated fleet name.
    **/
    GetFleetFleetname(req: operations.GetFleetFleetnameRequest, config?: AxiosRequestConfig): Promise<operations.GetFleetFleetnameResponse>;
    /**
     * Use this endpoint to generate a random group of users. The team is generated in a deterministic way, on the basis of the team name given as the path parameter.
     * In the case of identical team names, the endpoint will generate the same team object. The properties of the generated team object are randomly generated on the basis of the team name.
     * In lack of a team name, all calls generate a different team object to the randomly generated team name.
    **/
    GetTeamTeamname(req: operations.GetTeamTeamnameRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamTeamnameResponse>;
    /**
     * This endpoint allows you to get the data of a given PhantAuth tenant. To use the PhantAuth services, you don't need this endpoint.
     * It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
     *
     * Tenantname is the name of the full DNS domain of the tenant you get.
     * In the case of an official and shared tenant (phantauth.net and phantauth.cf DNS domains), the DNS domain can be omitted (e.g. *default* or *faker*).
    **/
    GetTenantTenantname(req: operations.GetTenantTenantnameRequest, config?: AxiosRequestConfig): Promise<operations.GetTenantTenantnameResponse>;
    /**
     * Use this endpoint to generate a random user. The user is generated in a deterministic way, on the bases of the user name given as a path parameter.
     * In the case of identical user names, the endpoint will generate the same user object. The properties of the generated user object are randomly generated on the basis of the user name.
     * In lack of a user name, all calls generate a different user object to the randomly generated user name.
     *
     * By providing an email address as the `username` parameter, you can customize the user picture by the use of the gravatar associated with the email address.
     *
     * If the `username` parameter contains at least one dot (`.`) or space (` `) character, the whole name is produced from the parameter, rather than being generated.
     * In this case, these cahracters play the role of separator between the units of the full name (family name, given name).`
     *
     * The result is always a user object. If you want to generate multiple users in one single step, you can do it by the use of *Team* generation.
     * The members of a team are users randomly generated from the team name.
    **/
    GetUserUsername(req: operations.GetUserUsernameRequest, config?: AxiosRequestConfig): Promise<operations.GetUserUsernameResponse>;
    /**
     * It is used to generate OpenID Connect tokens as path parameters to a user of a given name.
     *
     * This method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.
     * Generating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.
    **/
    GetUserUsernameTokenKind(req: operations.GetUserUsernameTokenKindRequest, config?: AxiosRequestConfig): Promise<operations.GetUserUsernameTokenKindResponse>;
    /**
     * To create a selfie token from the client data, you need an opaqe string token, which contains the encoded client properties sent in the request.
     * Later, the selfie token can be used as a client ID. In this case, the client data is included in the selfie token, that is, the client properties are taken from the token.
     * By the use of a selfie token, you can use your own client objects in the authentication process.
    **/
    PostClient(req: operations.PostClientRequest, config?: AxiosRequestConfig): Promise<operations.PostClientResponse>;
    /**
     * To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.
     * Later, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.
     * By the use of a selfie token, you can use your own user objects during the authentication process.
     *
     * Its use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.
    **/
    PostUser(req: operations.PostUserRequest, config?: AxiosRequestConfig): Promise<operations.PostUserResponse>;
}
export {};
