import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxItemResetLoginRequest
/** 
 * SandboxItemResetLoginRequest defines the request schema for `/sandbox/item/reset_login`
**/
export class SandboxItemResetLoginRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
