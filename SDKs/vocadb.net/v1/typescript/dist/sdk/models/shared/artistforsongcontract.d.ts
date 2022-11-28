import { SpeakeasyBase } from "../../../internal/utils";
import { ArtistContract } from "./artistcontract";
export declare enum ArtistForSongContractCategoriesEnum {
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
export declare enum ArtistForSongContractEffectiveRolesEnum {
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
export declare enum ArtistForSongContractRolesEnum {
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
export declare class ArtistForSongContract extends SpeakeasyBase {
    artist?: ArtistContract;
    categories?: ArtistForSongContractCategoriesEnum;
    effectiveRoles?: ArtistForSongContractEffectiveRolesEnum;
    id?: number;
    isCustomName?: boolean;
    isSupport?: boolean;
    name?: string;
    roles?: ArtistForSongContractRolesEnum;
}
