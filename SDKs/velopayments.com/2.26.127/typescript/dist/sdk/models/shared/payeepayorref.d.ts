import { SpeakeasyBase } from "../../../internal/utils";
import { InvitationStatusEnum } from "./invitationstatusenum";
import { PayableIssue2 } from "./payableissue2";
export declare class PayeePayorRef extends SpeakeasyBase {
    invitationStatus?: InvitationStatusEnum;
    invitationStatusTimestamp?: Date;
    payableIssues?: PayableIssue2[];
    payableStatus?: boolean;
    paymentChannelId?: string;
    payorId?: string;
    remoteId?: string;
}
