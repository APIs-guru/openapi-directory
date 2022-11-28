import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistContract } from "./artistcontract";


export enum ArtistForAlbumForApiContractCategoriesEnum {
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

export enum ArtistForAlbumForApiContractEffectiveRolesEnum {
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

export enum ArtistForAlbumForApiContractRolesEnum {
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


export class ArtistForAlbumForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artist" })
  artist?: ArtistContract;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: ArtistForAlbumForApiContractCategoriesEnum;

  @SpeakeasyMetadata({ data: "json, name=effectiveRoles" })
  effectiveRoles?: ArtistForAlbumForApiContractEffectiveRolesEnum;

  @SpeakeasyMetadata({ data: "json, name=isSupport" })
  isSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: ArtistForAlbumForApiContractRolesEnum;
}
