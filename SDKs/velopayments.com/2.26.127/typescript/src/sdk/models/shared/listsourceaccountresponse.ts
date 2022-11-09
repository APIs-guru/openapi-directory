import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SourceAccountResponse } from "./sourceaccountresponse";


// ListSourceAccountResponse
/** 
 * List Source Accounts Response Object
**/
export class ListSourceAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.SourceAccountResponse })
  content?: SourceAccountResponse[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
