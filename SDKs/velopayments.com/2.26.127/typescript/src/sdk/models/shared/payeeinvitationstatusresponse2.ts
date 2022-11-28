import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PayeeInvitationStatusResponse2InvitationStatusEnum {
    Accepted = "ACCEPTED",
    Pending = "PENDING",
    Declined = "DECLINED"
}


export class PayeeInvitationStatusResponse2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gracePeriodEndDate" })
  gracePeriodEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invitationStatus" })
  invitationStatus: PayeeInvitationStatusResponse2InvitationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId: string;
}
