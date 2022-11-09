import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemApplicationScopesUpdateResponse
/** 
 * ItemApplicationScopesUpdateResponse defines the response schema for `/item/application/scopes/update`
**/
export class ItemApplicationScopesUpdateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=request_id" })
  requestId: string;
}
