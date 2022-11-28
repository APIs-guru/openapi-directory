import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OAuth2PermissionGrantListResult
/** 
 * Server response for get oauth2 permissions grants
**/
export class OAuth2PermissionGrantListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any[];
}
