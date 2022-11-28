import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceAccountResponse } from "./sourceaccountresponse";



// ListSourceAccountResponse
/** 
 * List Source Accounts Response Object
**/
export class ListSourceAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: SourceAccountResponse })
  content?: SourceAccountResponse[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
