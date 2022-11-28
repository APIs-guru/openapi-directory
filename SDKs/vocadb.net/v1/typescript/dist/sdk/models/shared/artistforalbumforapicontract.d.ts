import { SpeakeasyBase } from "../../../internal/utils";
import { ArtistContract } from "./artistcontract";
export declare enum ArtistForAlbumForApiContractCategoriesEnum {
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
export declare enum ArtistForAlbumForApiContractEffectiveRolesEnum {
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
export declare enum ArtistForAlbumForApiContractRolesEnum {
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
export declare class ArtistForAlbumForApiContract extends SpeakeasyBase {
    artist?: ArtistContract;
    categories?: ArtistForAlbumForApiContractCategoriesEnum;
    effectiveRoles?: ArtistForAlbumForApiContractEffectiveRolesEnum;
    isSupport?: boolean;
    name?: string;
    roles?: ArtistForAlbumForApiContractRolesEnum;
}
