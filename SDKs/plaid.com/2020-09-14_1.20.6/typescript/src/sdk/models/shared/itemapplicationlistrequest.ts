import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemApplicationListRequest
/** 
 * Request to list connected applications for a user.
**/
export class ItemApplicationListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
