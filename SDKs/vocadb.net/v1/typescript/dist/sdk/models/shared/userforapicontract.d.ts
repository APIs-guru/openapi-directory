import { SpeakeasyBase } from "../../../internal/utils";
import { UserKnownLanguageContract } from "./userknownlanguagecontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { OldUsernameContract } from "./oldusernamecontract";
export declare enum UserForApiContractGroupIdEnum {
    Nothing = "Nothing",
    Limited = "Limited",
    Regular = "Regular",
    Trusted = "Trusted",
    Moderator = "Moderator",
    Admin = "Admin"
}
export declare class UserForApiContract extends SpeakeasyBase {
    active?: boolean;
    groupId?: UserForApiContractGroupIdEnum;
    id?: number;
    knownLanguages?: UserKnownLanguageContract[];
    mainPicture?: EntryThumbForApiContract;
    memberSince?: Date;
    name?: string;
    oldUsernames?: OldUsernameContract[];
    verifiedArtist?: boolean;
}
