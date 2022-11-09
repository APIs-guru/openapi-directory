import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtistContract } from "./artistcontract";

export enum ArtistForSongContractCategoriesEnum {
    Nothing = "Nothing"
,    Vocalist = "Vocalist"
,    Producer = "Producer"
,    Animator = "Animator"
,    Label = "Label"
,    Circle = "Circle"
,    Other = "Other"
,    Band = "Band"
,    Illustrator = "Illustrator"
,    Subject = "Subject"
}

export enum ArtistForSongContractEffectiveRolesEnum {
    Default = "Default"
,    Animator = "Animator"
,    Arranger = "Arranger"
,    Composer = "Composer"
,    Distributor = "Distributor"
,    Illustrator = "Illustrator"
,    Instrumentalist = "Instrumentalist"
,    Lyricist = "Lyricist"
,    Mastering = "Mastering"
,    Publisher = "Publisher"
,    Vocalist = "Vocalist"
,    VoiceManipulator = "VoiceManipulator"
,    Other = "Other"
,    Mixer = "Mixer"
,    Chorus = "Chorus"
,    Encoder = "Encoder"
,    VocalDataProvider = "VocalDataProvider"
}

export enum ArtistForSongContractRolesEnum {
    Default = "Default"
,    Animator = "Animator"
,    Arranger = "Arranger"
,    Composer = "Composer"
,    Distributor = "Distributor"
,    Illustrator = "Illustrator"
,    Instrumentalist = "Instrumentalist"
,    Lyricist = "Lyricist"
,    Mastering = "Mastering"
,    Publisher = "Publisher"
,    Vocalist = "Vocalist"
,    VoiceManipulator = "VoiceManipulator"
,    Other = "Other"
,    Mixer = "Mixer"
,    Chorus = "Chorus"
,    Encoder = "Encoder"
,    VocalDataProvider = "VocalDataProvider"
}


export class ArtistForSongContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=artist" })
  artist?: ArtistContract;

  @Metadata({ data: "json, name=categories" })
  categories?: ArtistForSongContractCategoriesEnum;

  @Metadata({ data: "json, name=effectiveRoles" })
  effectiveRoles?: ArtistForSongContractEffectiveRolesEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isCustomName" })
  isCustomName?: boolean;

  @Metadata({ data: "json, name=isSupport" })
  isSupport?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=roles" })
  roles?: ArtistForSongContractRolesEnum;
}
