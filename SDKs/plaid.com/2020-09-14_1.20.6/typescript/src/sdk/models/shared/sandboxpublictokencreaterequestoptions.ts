import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SandboxPublicTokenCreateRequestOptionsTransactions } from "./sandboxpublictokencreaterequestoptionstransactions";



// SandboxPublicTokenCreateRequestOptions
/** 
 * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
**/
export class SandboxPublicTokenCreateRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=override_password" })
  overridePassword?: string;

  @SpeakeasyMetadata({ data: "json, name=override_username" })
  overrideUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=transactions" })
  transactions?: SandboxPublicTokenCreateRequestOptionsTransactions;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}
