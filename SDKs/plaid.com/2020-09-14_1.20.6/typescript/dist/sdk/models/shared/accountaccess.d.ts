import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allow or disallow product access by account. Unlisted (e.g. missing) accounts will be considered `new_accounts`.
**/
export declare class AccountAccess extends SpeakeasyBase {
    authorized?: boolean;
    uniqueId: string;
}
