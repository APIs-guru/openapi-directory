import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PasswordCredentialsUpdateParameters
/** 
 * Request parameters for a PasswordCredentials update operation.
**/
export class PasswordCredentialsUpdateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value: Map<string, Map<string, any>>[];
}
