import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlbumContractInput } from "./albumcontract";
import { ArtistForSongContract } from "./artistforsongcontract";
import { LyricsForSongContract } from "./lyricsforsongcontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { PvContract } from "./pvcontract";
import { ReleaseEventForApiContractInput } from "./releaseeventforapicontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
import { AlbumContract } from "./albumcontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";


export enum SongForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum SongForApiContractPvServicesEnum {
    Nothing = "Nothing",
    NicoNicoDouga = "NicoNicoDouga",
    Youtube = "Youtube",
    SoundCloud = "SoundCloud",
    Vimeo = "Vimeo",
    Piapro = "Piapro",
    Bilibili = "Bilibili",
    File = "File",
    LocalFile = "LocalFile",
    Creofuga = "Creofuga",
    Bandcamp = "Bandcamp"
}

export enum SongForApiContractSongTypeEnum {
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

export enum SongForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class SongForApiContractInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=albums", elemType: AlbumContractInput })
  albums?: AlbumContractInput[];

  @SpeakeasyMetadata({ data: "json, name=artistString" })
  artistString?: string;

  @SpeakeasyMetadata({ data: "json, name=artists", elemType: ArtistForSongContract })
  artists?: ArtistForSongContract[];

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultName" })
  defaultName?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultNameLanguage" })
  defaultNameLanguage?: SongForApiContractDefaultNameLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=favoritedTimes" })
  favoritedTimes?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lengthSeconds" })
  lengthSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=lyrics", elemType: LyricsForSongContract })
  lyrics?: LyricsForSongContract[];

  @SpeakeasyMetadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @SpeakeasyMetadata({ data: "json, name=mergedTo" })
  mergedTo?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract })
  names?: LocalizedStringContract[];

  @SpeakeasyMetadata({ data: "json, name=originalVersionId" })
  originalVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=publishDate" })
  publishDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=pvServices" })
  pvServices?: SongForApiContractPvServicesEnum;

  @SpeakeasyMetadata({ data: "json, name=pvs", elemType: PvContract })
  pvs?: PvContract[];

  @SpeakeasyMetadata({ data: "json, name=ratingScore" })
  ratingScore?: number;

  @SpeakeasyMetadata({ data: "json, name=releaseEvent" })
  releaseEvent?: ReleaseEventForApiContractInput;

  @SpeakeasyMetadata({ data: "json, name=songType" })
  songType?: SongForApiContractSongTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SongForApiContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract })
  tags?: TagUsageForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=thumbUrl" })
  thumbUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}


export class SongForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=albums", elemType: AlbumContract })
  albums?: AlbumContract[];

  @SpeakeasyMetadata({ data: "json, name=artistString" })
  artistString?: string;

  @SpeakeasyMetadata({ data: "json, name=artists", elemType: ArtistForSongContract })
  artists?: ArtistForSongContract[];

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultName" })
  defaultName?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultNameLanguage" })
  defaultNameLanguage?: SongForApiContractDefaultNameLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=favoritedTimes" })
  favoritedTimes?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lengthSeconds" })
  lengthSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=lyrics", elemType: LyricsForSongContract })
  lyrics?: LyricsForSongContract[];

  @SpeakeasyMetadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @SpeakeasyMetadata({ data: "json, name=mergedTo" })
  mergedTo?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract })
  names?: LocalizedStringContract[];

  @SpeakeasyMetadata({ data: "json, name=originalVersionId" })
  originalVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=publishDate" })
  publishDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=pvServices" })
  pvServices?: SongForApiContractPvServicesEnum;

  @SpeakeasyMetadata({ data: "json, name=pvs", elemType: PvContract })
  pvs?: PvContract[];

  @SpeakeasyMetadata({ data: "json, name=ratingScore" })
  ratingScore?: number;

  @SpeakeasyMetadata({ data: "json, name=releaseEvent" })
  releaseEvent?: ReleaseEventForApiContract;

  @SpeakeasyMetadata({ data: "json, name=songType" })
  songType?: SongForApiContractSongTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SongForApiContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract })
  tags?: TagUsageForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=thumbUrl" })
  thumbUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
