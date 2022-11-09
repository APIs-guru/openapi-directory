import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserKnownLanguageContract } from "./userknownlanguagecontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { OldUsernameContract } from "./oldusernamecontract";

export enum UserForApiContractGroupIdEnum {
    Nothing = "Nothing"
,    Limited = "Limited"
,    Regular = "Regular"
,    Trusted = "Trusted"
,    Moderator = "Moderator"
,    Admin = "Admin"
}


export class UserForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=groupId" })
  groupId?: UserForApiContractGroupIdEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=knownLanguages", elemType: shared.UserKnownLanguageContract })
  knownLanguages?: UserKnownLanguageContract[];

  @Metadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @Metadata({ data: "json, name=memberSince" })
  memberSince?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=oldUsernames", elemType: shared.OldUsernameContract })
  oldUsernames?: OldUsernameContract[];

  @Metadata({ data: "json, name=verifiedArtist" })
  verifiedArtist?: boolean;
}
