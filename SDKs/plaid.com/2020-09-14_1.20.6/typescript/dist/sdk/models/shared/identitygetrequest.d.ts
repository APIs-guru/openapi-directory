import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityGetRequestOptions } from "./identitygetrequestoptions";
/**
 * IdentityGetRequest defines the request schema for `/identity/get`
**/
export declare class IdentityGetRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    options?: IdentityGetRequestOptions;
    secret?: string;
}
