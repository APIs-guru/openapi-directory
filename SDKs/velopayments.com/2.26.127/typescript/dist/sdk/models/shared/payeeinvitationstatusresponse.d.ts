import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PayeeInvitationStatusResponseInvitationStatusEnum {
    Accepted = "ACCEPTED",
    Pending = "PENDING",
    Declined = "DECLINED"
}
export declare class PayeeInvitationStatusResponse extends SpeakeasyBase {
    gracePeriodEndDate?: Date;
    invitationStatus: PayeeInvitationStatusResponseInvitationStatusEnum;
    payeeId: string;
}
