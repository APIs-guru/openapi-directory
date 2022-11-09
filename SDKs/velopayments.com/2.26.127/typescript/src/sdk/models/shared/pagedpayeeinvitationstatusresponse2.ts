import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PayeeInvitationStatusResponse2 } from "./payeeinvitationstatusresponse2";


// PagedPayeeInvitationStatusResponse2
/** 
 * List Payees Invitation Status Object
**/
export class PagedPayeeInvitationStatusResponse2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.PayeeInvitationStatusResponse2 })
  content?: PayeeInvitationStatusResponse2[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
