import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OAuth2PermissionGrantListResult
/** 
 * Server response for get oauth2 permissions grants
**/
export class OAuth2PermissionGrantListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @Metadata({ data: "json, name=value" })
  value?: any[];
}
