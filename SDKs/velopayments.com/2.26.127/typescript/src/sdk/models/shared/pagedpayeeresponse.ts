import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetPayeeListResponse } from "./getpayeelistresponse";



// PagedPayeeResponse
/** 
 * List Payees Response Object
**/
export class PagedPayeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: GetPayeeListResponse })
  content?: GetPayeeListResponse[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: any;
}
