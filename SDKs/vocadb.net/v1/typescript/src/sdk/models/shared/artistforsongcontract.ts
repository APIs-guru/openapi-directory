import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistContract } from "./artistcontract";


export enum ArtistForSongContractCategoriesEnum {
    Nothing = "Nothing",
    Vocalist = "Vocalist",
    Producer = "Producer",
    Animator = "Animator",
    Label = "Label",
    Circle = "Circle",
    Other = "Other",
    Band = "Band",
    Illustrator = "Illustrator",
    Subject = "Subject"
}

export enum ArtistForSongContractEffectiveRolesEnum {
    Default = "Default",
    Animator = "Animator",
    Arranger = "Arranger",
    Composer = "Composer",
    Distributor = "Distributor",
    Illustrator = "Illustrator",
    Instrumentalist = "Instrumentalist",
    Lyricist = "Lyricist",
    Mastering = "Mastering",
    Publisher = "Publisher",
    Vocalist = "Vocalist",
    VoiceManipulator = "VoiceManipulator",
    Other = "Other",
    Mixer = "Mixer",
    Chorus = "Chorus",
    Encoder = "Encoder",
    VocalDataProvider = "VocalDataProvider"
}

export enum ArtistForSongContractRolesEnum {
    Default = "Default",
    Animator = "Animator",
    Arranger = "Arranger",
    Composer = "Composer",
    Distributor = "Distributor",
    Illustrator = "Illustrator",
    Instrumentalist = "Instrumentalist",
    Lyricist = "Lyricist",
    Mastering = "Mastering",
    Publisher = "Publisher",
    Vocalist = "Vocalist",
    VoiceManipulator = "VoiceManipulator",
    Other = "Other",
    Mixer = "Mixer",
    Chorus = "Chorus",
    Encoder = "Encoder",
    VocalDataProvider = "VocalDataProvider"
}


export class ArtistForSongContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artist" })
  artist?: ArtistContract;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: ArtistForSongContractCategoriesEnum;

  @SpeakeasyMetadata({ data: "json, name=effectiveRoles" })
  effectiveRoles?: ArtistForSongContractEffectiveRolesEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isCustomName" })
  isCustomName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSupport" })
  isSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: ArtistForSongContractRolesEnum;
}
