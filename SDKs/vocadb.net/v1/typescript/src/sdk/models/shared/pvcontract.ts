import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PvExtendedMetadata } from "./pvextendedmetadata";


export enum PvContractPvTypeEnum {
    Original = "Original",
    Reprint = "Reprint",
    Other = "Other"
}

export enum PvContractServiceEnum {
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


export class PvContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: number;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extendedMetadata" })
  extendedMetadata?: PvExtendedMetadata;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=publishDate" })
  publishDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=pvId" })
  pvId?: string;

  @SpeakeasyMetadata({ data: "json, name=pvType" })
  pvType?: PvContractPvTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: PvContractServiceEnum;

  @SpeakeasyMetadata({ data: "json, name=thumbUrl" })
  thumbUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
