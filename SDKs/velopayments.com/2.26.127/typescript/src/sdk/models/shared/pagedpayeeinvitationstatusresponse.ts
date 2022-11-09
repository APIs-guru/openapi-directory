import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PayeeInvitationStatusResponse } from "./payeeinvitationstatusresponse";


// PagedPayeeInvitationStatusResponse
/** 
 * List Payees Invitation Status Object
**/
export class PagedPayeeInvitationStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.PayeeInvitationStatusResponse })
  content?: PayeeInvitationStatusResponse[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
