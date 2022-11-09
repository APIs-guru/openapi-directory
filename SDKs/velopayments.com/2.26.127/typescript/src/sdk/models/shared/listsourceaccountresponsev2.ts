import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SourceAccountResponseV2 } from "./sourceaccountresponsev2";


// ListSourceAccountResponseV2
/** 
 * List Source Accounts Response Object
**/
export class ListSourceAccountResponseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.SourceAccountResponseV2 })
  content?: SourceAccountResponseV2[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
