import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PayeeInvitationStatusResponseInvitationStatusEnum {
    Accepted = "ACCEPTED"
,    Pending = "PENDING"
,    Declined = "DECLINED"
}


export class PayeeInvitationStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=gracePeriodEndDate" })
  gracePeriodEndDate?: Date;

  @Metadata({ data: "json, name=invitationStatus" })
  invitationStatus: PayeeInvitationStatusResponseInvitationStatusEnum;

  @Metadata({ data: "json, name=payeeId" })
  payeeId: string;
}
