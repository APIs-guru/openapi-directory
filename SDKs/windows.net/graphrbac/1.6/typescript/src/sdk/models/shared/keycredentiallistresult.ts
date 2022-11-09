import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyCredentialListResult
/** 
 * KeyCredential list operation result.
**/
export class KeyCredentialListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
