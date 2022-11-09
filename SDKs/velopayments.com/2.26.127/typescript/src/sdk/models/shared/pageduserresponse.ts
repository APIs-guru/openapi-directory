import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserResponse } from "./userresponse";


// PagedUserResponse
/** 
 * List Users Response Object
**/
export class PagedUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.UserResponse })
  content?: UserResponse[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
