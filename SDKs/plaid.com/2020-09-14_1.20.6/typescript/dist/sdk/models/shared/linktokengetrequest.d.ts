import { SpeakeasyBase } from "../../../internal/utils";
/**
 * LinkTokenGetRequest defines the request schema for `/link/token/get`
**/
export declare class LinkTokenGetRequest extends SpeakeasyBase {
    clientId?: string;
    linkToken: string;
    secret?: string;
}
