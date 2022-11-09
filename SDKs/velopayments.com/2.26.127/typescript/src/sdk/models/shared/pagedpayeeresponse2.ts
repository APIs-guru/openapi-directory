import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GetPayeeListResponse2 } from "./getpayeelistresponse2";


// PagedPayeeResponse2
/** 
 * List Payees Response Object
**/
export class PagedPayeeResponse2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.GetPayeeListResponse2 })
  content?: GetPayeeListResponse2[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;

  @Metadata({ data: "json, name=summary" })
  summary?: any;
}
