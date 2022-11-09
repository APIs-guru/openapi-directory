import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SandboxPublicTokenCreateRequestOptionsTransactions } from "./sandboxpublictokencreaterequestoptionstransactions";


// SandboxPublicTokenCreateRequestOptions
/** 
 * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
**/
export class SandboxPublicTokenCreateRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=override_password" })
  overridePassword?: string;

  @Metadata({ data: "json, name=override_username" })
  overrideUsername?: string;

  @Metadata({ data: "json, name=transactions" })
  transactions?: SandboxPublicTokenCreateRequestOptionsTransactions;

  @Metadata({ data: "json, name=webhook" })
  webhook?: string;
}
