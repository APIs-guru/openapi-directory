import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionalDateTimeContract } from "./optionaldatetimecontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { ReleaseEventForApiContractInput } from "./releaseeventforapicontract";


export enum AlbumContractDiscTypeEnum {
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

export enum AlbumContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class AlbumContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=artistString" })
  artistString?: string;

  @SpeakeasyMetadata({ data: "json, name=coverPictureMime" })
  coverPictureMime?: string;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=discType" })
  discType?: AlbumContractDiscTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ratingAverage" })
  ratingAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=ratingCount" })
  ratingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=releaseDate" })
  releaseDate?: OptionalDateTimeContract;

  @SpeakeasyMetadata({ data: "json, name=releaseEvent" })
  releaseEvent?: ReleaseEventForApiContract;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AlbumContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}


export class AlbumContractInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=artistString" })
  artistString?: string;

  @SpeakeasyMetadata({ data: "json, name=coverPictureMime" })
  coverPictureMime?: string;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=discType" })
  discType?: AlbumContractDiscTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ratingAverage" })
  ratingAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=ratingCount" })
  ratingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=releaseDate" })
  releaseDate?: OptionalDateTimeContract;

  @SpeakeasyMetadata({ data: "json, name=releaseEvent" })
  releaseEvent?: ReleaseEventForApiContractInput;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AlbumContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
