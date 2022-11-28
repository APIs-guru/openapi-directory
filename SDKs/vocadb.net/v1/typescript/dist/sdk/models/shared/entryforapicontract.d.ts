import { SpeakeasyBase } from "../../../internal/utils";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { PvContract } from "./pvcontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { ArchivedWebLinkContract } from "./archivedweblinkcontract";
export declare enum EntryForApiContractArtistTypeEnum {
    Unknown = "Unknown",
    Circle = "Circle",
    Label = "Label",
    Producer = "Producer",
    Animator = "Animator",
    Illustrator = "Illustrator",
    Lyricist = "Lyricist",
    Vocaloid = "Vocaloid",
    Utau = "UTAU",
    CeVio = "CeVIO",
    OtherVoiceSynthesizer = "OtherVoiceSynthesizer",
    OtherVocalist = "OtherVocalist",
    OtherGroup = "OtherGroup",
    OtherIndividual = "OtherIndividual",
    Utaite = "Utaite",
    Band = "Band",
    Vocalist = "Vocalist",
    Character = "Character",
    SynthesizerV = "SynthesizerV"
}
export declare enum EntryForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum EntryForApiContractDiscTypeEnum {
    Unknown = "Unknown",
    Album = "Album",
    Single = "Single",
    Ep = "EP",
    SplitAlbum = "SplitAlbum",
    Compilation = "Compilation",
    Video = "Video",
    Artbook = "Artbook",
    Game = "Game",
    Fanmade = "Fanmade",
    Instrumental = "Instrumental",
    Other = "Other"
}
export declare enum EntryForApiContractEntryTypeEnum {
    Undefined = "Undefined",
    Album = "Album",
    Artist = "Artist",
    DiscussionTopic = "DiscussionTopic",
    Pv = "PV",
    ReleaseEvent = "ReleaseEvent",
    ReleaseEventSeries = "ReleaseEventSeries",
    Song = "Song",
    SongList = "SongList",
    Tag = "Tag",
    User = "User",
    Venue = "Venue"
}
export declare enum EntryForApiContractEventCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}
export declare enum EntryForApiContractSongListFeaturedCategoryEnum {
    Nothing = "Nothing",
    Concerts = "Concerts",
    VocaloidRanking = "VocaloidRanking",
    Pools = "Pools",
    Other = "Other"
}
export declare enum EntryForApiContractSongTypeEnum {
    Unspecified = "Unspecified",
    Original = "Original",
    Remaster = "Remaster",
    Remix = "Remix",
    Cover = "Cover",
    Arrangement = "Arrangement",
    Instrumental = "Instrumental",
    Mashup = "Mashup",
    MusicPv = "MusicPV",
    DramaPv = "DramaPV",
    Live = "Live",
    Illustration = "Illustration",
    Other = "Other"
}
export declare enum EntryForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class EntryForApiContract extends SpeakeasyBase {
    activityDate?: Date;
    additionalNames?: string;
    artistString?: string;
    artistType?: EntryForApiContractArtistTypeEnum;
    createDate?: Date;
    defaultName?: string;
    defaultNameLanguage?: EntryForApiContractDefaultNameLanguageEnum;
    description?: string;
    discType?: EntryForApiContractDiscTypeEnum;
    entryType?: EntryForApiContractEntryTypeEnum;
    eventCategory?: EntryForApiContractEventCategoryEnum;
    id?: number;
    mainPicture?: EntryThumbForApiContract;
    name?: string;
    names?: LocalizedStringContract[];
    pVs?: PvContract[];
    releaseEventSeriesName?: string;
    songListFeaturedCategory?: EntryForApiContractSongListFeaturedCategoryEnum;
    songType?: EntryForApiContractSongTypeEnum;
    status?: EntryForApiContractStatusEnum;
    tagCategoryName?: string;
    tags?: TagUsageForApiContract[];
    urlSlug?: string;
    version?: number;
    webLinks?: ArchivedWebLinkContract[];
}
