import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemApplicationScopesUpdateResponse
/** 
 * ItemApplicationScopesUpdateResponse defines the response schema for `/item/application/scopes/update`
**/
export class ItemApplicationScopesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;
}
