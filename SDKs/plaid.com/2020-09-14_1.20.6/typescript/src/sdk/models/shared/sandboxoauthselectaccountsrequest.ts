import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxOauthSelectAccountsRequest
/** 
 * Defines the request schema for `sandbox/oauth/select_accounts`
**/
export class SandboxOauthSelectAccountsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts" })
  accounts: string[];

  @Metadata({ data: "json, name=oauth_state_id" })
  oauthStateId: string;
}
