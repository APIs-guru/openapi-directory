import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUserUsername - Get a User
     *
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
    getUserUsername(req: operations.GetUserUsernameRequest, config?: AxiosRequestConfig): Promise<operations.GetUserUsernameResponse>;
    /**
     * getUserUsernameTokenKind - Get a User Token
     *
     * It is used to generate OpenID Connect tokens as path parameters to a user of a given name.
     *
     * This method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.
     * Generating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.
    **/
    getUserUsernameTokenKind(req: operations.GetUserUsernameTokenKindRequest, config?: AxiosRequestConfig): Promise<operations.GetUserUsernameTokenKindResponse>;
    /**
     * postUser - Create a User Selfie
     *
     * To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.
     * Later, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.
     * By the use of a selfie token, you can use your own user objects during the authentication process.
     *
     * Its use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.
    **/
    postUser(req: operations.PostUserRequest, config?: AxiosRequestConfig): Promise<operations.PostUserResponse>;
}
