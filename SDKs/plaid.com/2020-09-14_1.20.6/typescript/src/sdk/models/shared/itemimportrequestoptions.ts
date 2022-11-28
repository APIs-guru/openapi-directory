import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemImportRequestOptions
/** 
 * An optional object to configure `/item/import` request.
**/
export class ItemImportRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}
