import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PayeeInvitationStatusResponseInvitationStatusEnum {
    Accepted = "ACCEPTED",
    Pending = "PENDING",
    Declined = "DECLINED"
}


export class PayeeInvitationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gracePeriodEndDate" })
  gracePeriodEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invitationStatus" })
  invitationStatus: PayeeInvitationStatusResponseInvitationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId: string;
}
