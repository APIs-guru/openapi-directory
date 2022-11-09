import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * ItemGetRequest defines the request schema for `/item/get`
**/
export declare class ItemGetRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    secret?: string;
}
