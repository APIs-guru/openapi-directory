import { SpeakeasyBase } from "../../../internal/utils";
import { HouseMembership } from "./housemembership";
import { Party } from "./party";
export declare class Member extends SpeakeasyBase {
    gender?: string;
    id?: number;
    latestHouseMembership?: HouseMembership;
    latestParty?: Party;
    nameAddressAs?: string;
    nameDisplayAs?: string;
    nameFullTitle?: string;
    nameListAs?: string;
    thumbnailUrl?: string;
}
