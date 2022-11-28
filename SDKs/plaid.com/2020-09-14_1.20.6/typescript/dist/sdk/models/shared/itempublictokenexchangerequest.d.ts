import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ItemPublicTokenExchangeRequest defines the request schema for `/item/public_token/exchange`
**/
export declare class ItemPublicTokenExchangeRequest extends SpeakeasyBase {
    clientId?: string;
    publicToken: string;
    secret?: string;
}
