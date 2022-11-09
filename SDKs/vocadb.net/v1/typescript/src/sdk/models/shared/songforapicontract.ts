import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlbumContract } from "./albumcontract";
import { ArtistForSongContract } from "./artistforsongcontract";
import { LyricsForSongContract } from "./lyricsforsongcontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { PvContract } from "./pvcontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";

export enum SongForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum SongForApiContractPvServicesEnum {
    Nothing = "Nothing"
,    NicoNicoDouga = "NicoNicoDouga"
,    Youtube = "Youtube"
,    SoundCloud = "SoundCloud"
,    Vimeo = "Vimeo"
,    Piapro = "Piapro"
,    Bilibili = "Bilibili"
,    File = "File"
,    LocalFile = "LocalFile"
,    Creofuga = "Creofuga"
,    Bandcamp = "Bandcamp"
}

export enum SongForApiContractSongTypeEnum {
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

export enum SongForApiContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class SongForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=albums", elemType: shared.AlbumContract })
  albums?: AlbumContract[];

  @Metadata({ data: "json, name=artistString" })
  artistString?: string;

  @Metadata({ data: "json, name=artists", elemType: shared.ArtistForSongContract })
  artists?: ArtistForSongContract[];

  @Metadata({ data: "json, name=createDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=defaultName" })
  defaultName?: string;

  @Metadata({ data: "json, name=defaultNameLanguage" })
  defaultNameLanguage?: SongForApiContractDefaultNameLanguageEnum;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=favoritedTimes" })
  favoritedTimes?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lengthSeconds" })
  lengthSeconds?: number;

  @Metadata({ data: "json, name=lyrics", elemType: shared.LyricsForSongContract })
  lyrics?: LyricsForSongContract[];

  @Metadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @Metadata({ data: "json, name=mergedTo" })
  mergedTo?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=names", elemType: shared.LocalizedStringContract })
  names?: LocalizedStringContract[];

  @Metadata({ data: "json, name=originalVersionId" })
  originalVersionId?: number;

  @Metadata({ data: "json, name=publishDate" })
  publishDate?: Date;

  @Metadata({ data: "json, name=pvServices" })
  pvServices?: SongForApiContractPvServicesEnum;

  @Metadata({ data: "json, name=pvs", elemType: shared.PvContract })
  pvs?: PvContract[];

  @Metadata({ data: "json, name=ratingScore" })
  ratingScore?: number;

  @Metadata({ data: "json, name=releaseEvent" })
  releaseEvent?: ReleaseEventForApiContract;

  @Metadata({ data: "json, name=songType" })
  songType?: SongForApiContractSongTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: SongForApiContractStatusEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.TagUsageForApiContract })
  tags?: TagUsageForApiContract[];

  @Metadata({ data: "json, name=thumbUrl" })
  thumbUrl?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=webLinks", elemType: shared.WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
