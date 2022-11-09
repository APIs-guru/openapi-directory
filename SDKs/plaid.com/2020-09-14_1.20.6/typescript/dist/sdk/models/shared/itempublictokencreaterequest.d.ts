import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * ItemPublicTokenCreateRequest defines the request schema for `/item/public_token/create`
**/
export declare class ItemPublicTokenCreateRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    secret?: string;
}
