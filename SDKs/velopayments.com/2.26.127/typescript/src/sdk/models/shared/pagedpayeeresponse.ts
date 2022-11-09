import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GetPayeeListResponse } from "./getpayeelistresponse";


// PagedPayeeResponse
/** 
 * List Payees Response Object
**/
export class PagedPayeeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.GetPayeeListResponse })
  content?: GetPayeeListResponse[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;

  @Metadata({ data: "json, name=summary" })
  summary?: any;
}
