import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PayorLinksResponse
/** 
 * List Payor Links Response Object
**/
export class PayorLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=payors" })
  payors?: any[];
}
