import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OptionalDateTimeContract } from "./optionaldatetimecontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";

export enum AlbumContractDiscTypeEnum {
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

export enum AlbumContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class AlbumContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=artistString" })
  artistString?: string;

  @Metadata({ data: "json, name=coverPictureMime" })
  coverPictureMime?: string;

  @Metadata({ data: "json, name=createDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=discType" })
  discType?: AlbumContractDiscTypeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ratingAverage" })
  ratingAverage?: number;

  @Metadata({ data: "json, name=ratingCount" })
  ratingCount?: number;

  @Metadata({ data: "json, name=releaseDate" })
  releaseDate?: OptionalDateTimeContract;

  @Metadata({ data: "json, name=releaseEvent" })
  releaseEvent?: ReleaseEventForApiContract;

  @Metadata({ data: "json, name=status" })
  status?: AlbumContractStatusEnum;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
