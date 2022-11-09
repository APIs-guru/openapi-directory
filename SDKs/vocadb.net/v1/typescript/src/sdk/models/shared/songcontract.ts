import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SongContractPvServicesEnum {
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

export enum SongContractSongTypeEnum {
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

export enum SongContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class SongContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=artistString" })
  artistString?: string;

  @Metadata({ data: "json, name=createDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=favoritedTimes" })
  favoritedTimes?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lengthSeconds" })
  lengthSeconds?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nicoId" })
  nicoId?: string;

  @Metadata({ data: "json, name=publishDate" })
  publishDate?: Date;

  @Metadata({ data: "json, name=pvServices" })
  pvServices?: SongContractPvServicesEnum;

  @Metadata({ data: "json, name=ratingScore" })
  ratingScore?: number;

  @Metadata({ data: "json, name=songType" })
  songType?: SongContractSongTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: SongContractStatusEnum;

  @Metadata({ data: "json, name=thumbUrl" })
  thumbUrl?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
