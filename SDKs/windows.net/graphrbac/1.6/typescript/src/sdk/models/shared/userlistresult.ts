import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserListResult
/** 
 * Server response for Get tenant users API call.
**/
export class UserListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
