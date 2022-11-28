import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Scopes } from "./scopes";



// ItemApplicationScopesUpdateRequest
/** 
 * ItemApplicationScopesUpdateRequest defines the request schema for `/item/application/scopes/update`
**/
export class ItemApplicationScopesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes: Scopes;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
