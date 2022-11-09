import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PayeeInvitationStatusResponse2InvitationStatusEnum {
    Accepted = "ACCEPTED"
,    Pending = "PENDING"
,    Declined = "DECLINED"
}


export class PayeeInvitationStatusResponse2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=gracePeriodEndDate" })
  gracePeriodEndDate?: Date;

  @Metadata({ data: "json, name=invitationStatus" })
  invitationStatus: PayeeInvitationStatusResponse2InvitationStatusEnum;

  @Metadata({ data: "json, name=payeeId" })
  payeeId: string;
}
