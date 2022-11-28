import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayeeInvitationStatusResponse } from "./payeeinvitationstatusresponse";



// PagedPayeeInvitationStatusResponse
/** 
 * List Payees Invitation Status Object
**/
export class PagedPayeeInvitationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PayeeInvitationStatusResponse })
  content?: PayeeInvitationStatusResponse[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
