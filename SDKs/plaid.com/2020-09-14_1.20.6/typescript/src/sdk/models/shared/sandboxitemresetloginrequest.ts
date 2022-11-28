import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxItemResetLoginRequest
/** 
 * SandboxItemResetLoginRequest defines the request schema for `/sandbox/item/reset_login`
**/
export class SandboxItemResetLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
