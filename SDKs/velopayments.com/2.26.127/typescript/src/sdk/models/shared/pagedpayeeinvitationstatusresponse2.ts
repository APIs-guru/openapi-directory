import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayeeInvitationStatusResponse2 } from "./payeeinvitationstatusresponse2";



// PagedPayeeInvitationStatusResponse2
/** 
 * List Payees Invitation Status Object
**/
export class PagedPayeeInvitationStatusResponse2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PayeeInvitationStatusResponse2 })
  content?: PayeeInvitationStatusResponse2[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
