import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PayorLinksResponse
/** 
 * List Payor Links Response Object
**/
export class PayorLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=payors" })
  payors?: any[];
}
