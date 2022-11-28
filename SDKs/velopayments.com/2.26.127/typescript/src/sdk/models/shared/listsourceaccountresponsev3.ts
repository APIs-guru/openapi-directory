import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceAccountResponseV3 } from "./sourceaccountresponsev3";



// ListSourceAccountResponseV3
/** 
 * List Source Accounts Response Object
**/
export class ListSourceAccountResponseV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: SourceAccountResponseV3 })
  content?: SourceAccountResponseV3[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
