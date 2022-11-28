import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Market
/** 
 * Market
**/
export class Market extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
