import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvitationStatus2Enum } from "./invitationstatus2enum";
import { PayableIssue } from "./payableissue";



export class PayeePayorRefV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invitationStatus" })
  invitationStatus?: InvitationStatus2Enum;

  @SpeakeasyMetadata({ data: "json, name=invitationStatusTimestamp" })
  invitationStatusTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=payableIssues", elemType: PayableIssue })
  payableIssues?: PayableIssue[];

  @SpeakeasyMetadata({ data: "json, name=payableStatus" })
  payableStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paymentChannelId" })
  paymentChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteId" })
  remoteId?: string;
}
