import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemApplicationListRequest
/** 
 * Request to list connected applications for a user.
**/
export class ItemApplicationListRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
