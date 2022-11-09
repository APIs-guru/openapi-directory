import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtistContract } from "./artistcontract";

export enum ArtistForAlbumForApiContractCategoriesEnum {
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

export enum ArtistForAlbumForApiContractEffectiveRolesEnum {
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

export enum ArtistForAlbumForApiContractRolesEnum {
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


export class ArtistForAlbumForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=artist" })
  artist?: ArtistContract;

  @Metadata({ data: "json, name=categories" })
  categories?: ArtistForAlbumForApiContractCategoriesEnum;

  @Metadata({ data: "json, name=effectiveRoles" })
  effectiveRoles?: ArtistForAlbumForApiContractEffectiveRolesEnum;

  @Metadata({ data: "json, name=isSupport" })
  isSupport?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=roles" })
  roles?: ArtistForAlbumForApiContractRolesEnum;
}
