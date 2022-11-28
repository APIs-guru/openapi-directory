import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SongContractPvServicesEnum {
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

export enum SongContractSongTypeEnum {
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

export enum SongContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class SongContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=artistString" })
  artistString?: string;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=favoritedTimes" })
  favoritedTimes?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lengthSeconds" })
  lengthSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nicoId" })
  nicoId?: string;

  @SpeakeasyMetadata({ data: "json, name=publishDate" })
  publishDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=pvServices" })
  pvServices?: SongContractPvServicesEnum;

  @SpeakeasyMetadata({ data: "json, name=ratingScore" })
  ratingScore?: number;

  @SpeakeasyMetadata({ data: "json, name=songType" })
  songType?: SongContractSongTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SongContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=thumbUrl" })
  thumbUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
