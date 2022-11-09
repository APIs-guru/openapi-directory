import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { PvContract } from "./pvcontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { ArchivedWebLinkContract } from "./archivedweblinkcontract";

export enum EntryForApiContractArtistTypeEnum {
    Unknown = "Unknown"
,    Circle = "Circle"
,    Label = "Label"
,    Producer = "Producer"
,    Animator = "Animator"
,    Illustrator = "Illustrator"
,    Lyricist = "Lyricist"
,    Vocaloid = "Vocaloid"
,    Utau = "UTAU"
,    CeVio = "CeVIO"
,    OtherVoiceSynthesizer = "OtherVoiceSynthesizer"
,    OtherVocalist = "OtherVocalist"
,    OtherGroup = "OtherGroup"
,    OtherIndividual = "OtherIndividual"
,    Utaite = "Utaite"
,    Band = "Band"
,    Vocalist = "Vocalist"
,    Character = "Character"
,    SynthesizerV = "SynthesizerV"
}

export enum EntryForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum EntryForApiContractDiscTypeEnum {
    Unknown = "Unknown"
,    Album = "Album"
,    Single = "Single"
,    Ep = "EP"
,    SplitAlbum = "SplitAlbum"
,    Compilation = "Compilation"
,    Video = "Video"
,    Artbook = "Artbook"
,    Game = "Game"
,    Fanmade = "Fanmade"
,    Instrumental = "Instrumental"
,    Other = "Other"
}

export enum EntryForApiContractEntryTypeEnum {
    Undefined = "Undefined"
,    Album = "Album"
,    Artist = "Artist"
,    DiscussionTopic = "DiscussionTopic"
,    Pv = "PV"
,    ReleaseEvent = "ReleaseEvent"
,    ReleaseEventSeries = "ReleaseEventSeries"
,    Song = "Song"
,    SongList = "SongList"
,    Tag = "Tag"
,    User = "User"
,    Venue = "Venue"
}

export enum EntryForApiContractEventCategoryEnum {
    Unspecified = "Unspecified"
,    AlbumRelease = "AlbumRelease"
,    Anniversary = "Anniversary"
,    Club = "Club"
,    Concert = "Concert"
,    Contest = "Contest"
,    Convention = "Convention"
,    Other = "Other"
}

export enum EntryForApiContractSongListFeaturedCategoryEnum {
    Nothing = "Nothing"
,    Concerts = "Concerts"
,    VocaloidRanking = "VocaloidRanking"
,    Pools = "Pools"
,    Other = "Other"
}

export enum EntryForApiContractSongTypeEnum {
    Unspecified = "Unspecified"
,    Original = "Original"
,    Remaster = "Remaster"
,    Remix = "Remix"
,    Cover = "Cover"
,    Arrangement = "Arrangement"
,    Instrumental = "Instrumental"
,    Mashup = "Mashup"
,    MusicPv = "MusicPV"
,    DramaPv = "DramaPV"
,    Live = "Live"
,    Illustration = "Illustration"
,    Other = "Other"
}

export enum EntryForApiContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class EntryForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityDate" })
  activityDate?: Date;

  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=artistString" })
  artistString?: string;

  @Metadata({ data: "json, name=artistType" })
  artistType?: EntryForApiContractArtistTypeEnum;

  @Metadata({ data: "json, name=createDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=defaultName" })
  defaultName?: string;

  @Metadata({ data: "json, name=defaultNameLanguage" })
  defaultNameLanguage?: EntryForApiContractDefaultNameLanguageEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=discType" })
  discType?: EntryForApiContractDiscTypeEnum;

  @Metadata({ data: "json, name=entryType" })
  entryType?: EntryForApiContractEntryTypeEnum;

  @Metadata({ data: "json, name=eventCategory" })
  eventCategory?: EntryForApiContractEventCategoryEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=names", elemType: shared.LocalizedStringContract })
  names?: LocalizedStringContract[];

  @Metadata({ data: "json, name=pVs", elemType: shared.PvContract })
  pVs?: PvContract[];

  @Metadata({ data: "json, name=releaseEventSeriesName" })
  releaseEventSeriesName?: string;

  @Metadata({ data: "json, name=songListFeaturedCategory" })
  songListFeaturedCategory?: EntryForApiContractSongListFeaturedCategoryEnum;

  @Metadata({ data: "json, name=songType" })
  songType?: EntryForApiContractSongTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: EntryForApiContractStatusEnum;

  @Metadata({ data: "json, name=tagCategoryName" })
  tagCategoryName?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.TagUsageForApiContract })
  tags?: TagUsageForApiContract[];

  @Metadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=webLinks", elemType: shared.ArchivedWebLinkContract })
  webLinks?: ArchivedWebLinkContract[];
}
