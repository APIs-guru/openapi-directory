import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PayeeInvitationStatusResponse2InvitationStatusEnum {
    Accepted = "ACCEPTED",
    Pending = "PENDING",
    Declined = "DECLINED"
}
export declare class PayeeInvitationStatusResponse2 extends SpeakeasyBase {
    gracePeriodEndDate?: Date;
    invitationStatus: PayeeInvitationStatusResponse2InvitationStatusEnum;
    payeeId: string;
}
