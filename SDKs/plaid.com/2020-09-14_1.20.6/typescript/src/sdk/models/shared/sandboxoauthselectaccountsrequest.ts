import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxOauthSelectAccountsRequest
/** 
 * Defines the request schema for `sandbox/oauth/select_accounts`
**/
export class SandboxOauthSelectAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts" })
  accounts: string[];

  @SpeakeasyMetadata({ data: "json, name=oauth_state_id" })
  oauthStateId: string;
}
