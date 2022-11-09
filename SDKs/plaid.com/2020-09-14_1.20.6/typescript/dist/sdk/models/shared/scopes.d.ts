import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountAccess } from "./accountaccess";
/**
 * The scopes object
**/
export declare class Scopes extends SpeakeasyBase {
    accounts?: AccountAccess[];
    newAccounts?: boolean;
    productAccess?: Map<string, any>;
}
