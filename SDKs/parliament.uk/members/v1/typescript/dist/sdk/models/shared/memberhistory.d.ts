import { SpeakeasyBase } from "../../../internal/utils";
import { HouseMembership } from "./housemembership";
import { MemberName } from "./membername";
import { MemberParty } from "./memberparty";
export declare class MemberHistory extends SpeakeasyBase {
    houseMembershipHistory?: HouseMembership[];
    id?: number;
    nameHistory?: MemberName[];
    partyHistory?: MemberParty[];
    thumbnailUrl?: string;
}
