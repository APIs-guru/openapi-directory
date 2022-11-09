import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InvitationStatus2Enum } from "./invitationstatus2enum";
import { PayableIssue } from "./payableissue";


export class PayeePayorRefV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=invitationStatus" })
  invitationStatus?: InvitationStatus2Enum;

  @Metadata({ data: "json, name=invitationStatusTimestamp" })
  invitationStatusTimestamp?: Date;

  @Metadata({ data: "json, name=payableIssues", elemType: shared.PayableIssue })
  payableIssues?: PayableIssue[];

  @Metadata({ data: "json, name=payableStatus" })
  payableStatus?: boolean;

  @Metadata({ data: "json, name=paymentChannelId" })
  paymentChannelId?: string;

  @Metadata({ data: "json, name=payorId" })
  payorId?: string;

  @Metadata({ data: "json, name=remoteId" })
  remoteId?: string;
}
