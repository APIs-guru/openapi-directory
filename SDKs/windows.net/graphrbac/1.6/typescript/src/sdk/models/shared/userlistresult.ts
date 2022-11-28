import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserListResult
/** 
 * Server response for Get tenant users API call.
**/
export class UserListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
