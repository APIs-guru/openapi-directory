import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object of user ID and auth token pair, permitting Plaid to aggregate a user’s accounts
**/
export declare class ItemImportRequestUserAuth extends SpeakeasyBase {
    authToken: string;
    userId: string;
}
