import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvitationStatusEnum } from "./invitationstatusenum";
import { PayableIssue2 } from "./payableissue2";



export class PayeePayorRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invitationStatus" })
  invitationStatus?: InvitationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=invitationStatusTimestamp" })
  invitationStatusTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=payableIssues", elemType: PayableIssue2 })
  payableIssues?: PayableIssue2[];

  @SpeakeasyMetadata({ data: "json, name=payableStatus" })
  payableStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paymentChannelId" })
  paymentChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteId" })
  remoteId?: string;
}
