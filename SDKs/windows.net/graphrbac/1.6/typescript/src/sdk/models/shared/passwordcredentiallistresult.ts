import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PasswordCredentialListResult
/** 
 * PasswordCredential list operation result.
**/
export class PasswordCredentialListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
