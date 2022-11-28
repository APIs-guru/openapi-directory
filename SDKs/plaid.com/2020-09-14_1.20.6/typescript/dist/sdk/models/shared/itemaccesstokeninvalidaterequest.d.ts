import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ItemAccessTokenInvalidateRequest defines the request schema for `/item/access_token/invalidate`
**/
export declare class ItemAccessTokenInvalidateRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    secret?: string;
}
