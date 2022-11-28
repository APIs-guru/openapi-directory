import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { PvContract } from "./pvcontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { ArchivedWebLinkContract } from "./archivedweblinkcontract";


export enum EntryForApiContractArtistTypeEnum {
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

export enum EntryForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum EntryForApiContractDiscTypeEnum {
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

export enum EntryForApiContractEntryTypeEnum {
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

export enum EntryForApiContractEventCategoryEnum {
    Unspecified = "Unspecified",
    AlbumRelease = "AlbumRelease",
    Anniversary = "Anniversary",
    Club = "Club",
    Concert = "Concert",
    Contest = "Contest",
    Convention = "Convention",
    Other = "Other"
}

export enum EntryForApiContractSongListFeaturedCategoryEnum {
    Nothing = "Nothing",
    Concerts = "Concerts",
    VocaloidRanking = "VocaloidRanking",
    Pools = "Pools",
    Other = "Other"
}

export enum EntryForApiContractSongTypeEnum {
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

export enum EntryForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class EntryForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityDate" })
  activityDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=artistString" })
  artistString?: string;

  @SpeakeasyMetadata({ data: "json, name=artistType" })
  artistType?: EntryForApiContractArtistTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultName" })
  defaultName?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultNameLanguage" })
  defaultNameLanguage?: EntryForApiContractDefaultNameLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discType" })
  discType?: EntryForApiContractDiscTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=entryType" })
  entryType?: EntryForApiContractEntryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=eventCategory" })
  eventCategory?: EntryForApiContractEventCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract })
  names?: LocalizedStringContract[];

  @SpeakeasyMetadata({ data: "json, name=pVs", elemType: PvContract })
  pVs?: PvContract[];

  @SpeakeasyMetadata({ data: "json, name=releaseEventSeriesName" })
  releaseEventSeriesName?: string;

  @SpeakeasyMetadata({ data: "json, name=songListFeaturedCategory" })
  songListFeaturedCategory?: EntryForApiContractSongListFeaturedCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=songType" })
  songType?: EntryForApiContractSongTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EntryForApiContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tagCategoryName" })
  tagCategoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract })
  tags?: TagUsageForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: ArchivedWebLinkContract })
  webLinks?: ArchivedWebLinkContract[];
}
