import { SpeakeasyBase } from "../../../internal/utils";
import { HouseMembershipStatus } from "./housemembershipstatus";
export declare class HouseMembership extends SpeakeasyBase {
    house?: number;
    membershipEndDate?: Date;
    membershipEndReason?: string;
    membershipEndReasonId?: number;
    membershipEndReasonNotes?: string;
    membershipFrom?: string;
    membershipFromId?: number;
    membershipStartDate?: Date;
    membershipStatus?: HouseMembershipStatus;
}
