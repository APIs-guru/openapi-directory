import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemImportRequestOptions
/** 
 * An optional object to configure `/item/import` request.
**/
export class ItemImportRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhook" })
  webhook?: string;
}
