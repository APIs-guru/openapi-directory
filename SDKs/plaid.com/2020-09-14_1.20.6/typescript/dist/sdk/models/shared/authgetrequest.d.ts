import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthGetRequestOptions } from "./authgetrequestoptions";
/**
 * AuthGetRequest defines the request schema for `/auth/get`
**/
export declare class AuthGetRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    options?: AuthGetRequestOptions;
    secret?: string;
}
