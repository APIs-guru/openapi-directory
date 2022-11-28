import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserKnownLanguageContract } from "./userknownlanguagecontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { OldUsernameContract } from "./oldusernamecontract";


export enum UserForApiContractGroupIdEnum {
    Nothing = "Nothing",
    Limited = "Limited",
    Regular = "Regular",
    Trusted = "Trusted",
    Moderator = "Moderator",
    Admin = "Admin"
}


export class UserForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: UserForApiContractGroupIdEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=knownLanguages", elemType: UserKnownLanguageContract })
  knownLanguages?: UserKnownLanguageContract[];

  @SpeakeasyMetadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @SpeakeasyMetadata({ data: "json, name=memberSince" })
  memberSince?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oldUsernames", elemType: OldUsernameContract })
  oldUsernames?: OldUsernameContract[];

  @SpeakeasyMetadata({ data: "json, name=verifiedArtist" })
  verifiedArtist?: boolean;
}
