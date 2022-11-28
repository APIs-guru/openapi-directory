import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `sandbox/oauth/select_accounts`
**/
export declare class SandboxOauthSelectAccountsRequest extends SpeakeasyBase {
    accounts: string[];
    oauthStateId: string;
}
