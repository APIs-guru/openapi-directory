import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ItemRemoveRequest defines the request schema for `/item/remove`
**/
export declare class ItemRemoveRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    secret?: string;
}
