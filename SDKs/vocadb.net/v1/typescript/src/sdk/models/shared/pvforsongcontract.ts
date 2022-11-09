import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PvExtendedMetadata } from "./pvextendedmetadata";
import { SongContract } from "./songcontract";

export enum PvForSongContractPvTypeEnum {
    Original = "Original"
,    Reprint = "Reprint"
,    Other = "Other"
}

export enum PvForSongContractServiceEnum {
    NicoNicoDouga = "NicoNicoDouga"
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


export class PvForSongContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: number;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=extendedMetadata" })
  extendedMetadata?: PvExtendedMetadata;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=length" })
  length?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=publishDate" })
  publishDate?: Date;

  @Metadata({ data: "json, name=pvId" })
  pvId?: string;

  @Metadata({ data: "json, name=pvType" })
  pvType?: PvForSongContractPvTypeEnum;

  @Metadata({ data: "json, name=service" })
  service?: PvForSongContractServiceEnum;

  @Metadata({ data: "json, name=song" })
  song?: SongContract;

  @Metadata({ data: "json, name=thumbUrl" })
  thumbUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
