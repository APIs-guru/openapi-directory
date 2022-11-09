import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InvitationStatusEnum } from "./invitationstatusenum";
import { PayableIssue2 } from "./payableissue2";


export class PayeePayorRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=invitationStatus" })
  invitationStatus?: InvitationStatusEnum;

  @Metadata({ data: "json, name=invitationStatusTimestamp" })
  invitationStatusTimestamp?: Date;

  @Metadata({ data: "json, name=payableIssues", elemType: shared.PayableIssue2 })
  payableIssues?: PayableIssue2[];

  @Metadata({ data: "json, name=payableStatus" })
  payableStatus?: boolean;

  @Metadata({ data: "json, name=paymentChannelId" })
  paymentChannelId?: string;

  @Metadata({ data: "json, name=payorId" })
  payorId?: string;

  @Metadata({ data: "json, name=remoteId" })
  remoteId?: string;
}
