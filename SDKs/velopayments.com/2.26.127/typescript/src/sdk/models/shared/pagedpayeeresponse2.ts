import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetPayeeListResponse2 } from "./getpayeelistresponse2";



// PagedPayeeResponse2
/** 
 * List Payees Response Object
**/
export class PagedPayeeResponse2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: GetPayeeListResponse2 })
  content?: GetPayeeListResponse2[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: any;
}
