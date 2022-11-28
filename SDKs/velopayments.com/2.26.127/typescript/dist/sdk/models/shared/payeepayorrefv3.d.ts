import { SpeakeasyBase } from "../../../internal/utils";
import { InvitationStatus2Enum } from "./invitationstatus2enum";
import { PayableIssue } from "./payableissue";
export declare class PayeePayorRefV3 extends SpeakeasyBase {
    invitationStatus?: InvitationStatus2Enum;
    invitationStatusTimestamp?: Date;
    payableIssues?: PayableIssue[];
    payableStatus?: boolean;
    paymentChannelId?: string;
    payorId?: string;
    remoteId?: string;
}
