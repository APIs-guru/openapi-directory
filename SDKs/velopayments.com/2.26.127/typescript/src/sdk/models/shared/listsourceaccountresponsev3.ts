import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SourceAccountResponseV3 } from "./sourceaccountresponsev3";


// ListSourceAccountResponseV3
/** 
 * List Source Accounts Response Object
**/
export class ListSourceAccountResponseV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.SourceAccountResponseV3 })
  content?: SourceAccountResponseV3[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
