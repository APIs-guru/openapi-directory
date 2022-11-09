import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Scopes } from "./scopes";


// ItemApplicationScopesUpdateRequest
/** 
 * ItemApplicationScopesUpdateRequest defines the request schema for `/item/application/scopes/update`
**/
export class ItemApplicationScopesUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=application_id" })
  applicationId: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes: Scopes;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
