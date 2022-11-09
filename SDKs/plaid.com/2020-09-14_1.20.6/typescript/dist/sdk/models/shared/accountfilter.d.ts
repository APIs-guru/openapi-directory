import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Enumerates the account subtypes that the application wishes for the user to be able to select from. For more details refer to Plaid documentation on account filters.
**/
export declare class AccountFilter extends SpeakeasyBase {
    credit?: string[];
    depository?: string[];
    investment?: string[];
    loan?: string[];
}
