import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PvExtendedMetadata } from "./pvextendedmetadata";

export enum PvContractPvTypeEnum {
    Original = "Original"
,    Reprint = "Reprint"
,    Other = "Other"
}

export enum PvContractServiceEnum {
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


export class PvContract extends SpeakeasyBase {
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
  pvType?: PvContractPvTypeEnum;

  @Metadata({ data: "json, name=service" })
  service?: PvContractServiceEnum;

  @Metadata({ data: "json, name=thumbUrl" })
  thumbUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
