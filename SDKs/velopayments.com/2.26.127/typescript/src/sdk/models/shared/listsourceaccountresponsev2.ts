import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceAccountResponseV2 } from "./sourceaccountresponsev2";



// ListSourceAccountResponseV2
/** 
 * List Source Accounts Response Object
**/
export class ListSourceAccountResponseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: SourceAccountResponseV2 })
  content?: SourceAccountResponseV2[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
