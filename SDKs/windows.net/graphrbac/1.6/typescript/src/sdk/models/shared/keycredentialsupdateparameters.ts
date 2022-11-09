import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyCredentialsUpdateParameters
/** 
 * Request parameters for a KeyCredentials update operation
**/
export class KeyCredentialsUpdateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value: Map<string, Map<string, any>>[];
}
