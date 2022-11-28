import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserResponse } from "./userresponse";



// PagedUserResponse
/** 
 * List Users Response Object
**/
export class PagedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: UserResponse })
  content?: UserResponse[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
