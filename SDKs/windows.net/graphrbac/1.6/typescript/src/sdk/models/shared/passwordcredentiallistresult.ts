import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PasswordCredentialListResult
/** 
 * PasswordCredential list operation result.
**/
export class PasswordCredentialListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
