import { SpeakeasyBase } from "../../../internal/utils/utils";
import { HouseMembershipViewModel } from "./housemembershipviewmodel";
import { PartyViewModel } from "./partyviewmodel";
export declare class MemberViewModel extends SpeakeasyBase {
    id?: number;
    latestHouseMembership?: HouseMembershipViewModel;
    latestParty?: PartyViewModel;
    nameAddressAs?: string;
    nameDisplayAs?: string;
    nameFullTitle?: string;
    nameListAs?: string;
    thumbnailUrl?: string;
}
