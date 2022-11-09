import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AlbumDiscPropertiesContractMediaTypeEnum {
    Audio = "Audio"
,    Video = "Video"
}


export class AlbumDiscPropertiesContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=discNumber" })
  discNumber?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=mediaType" })
  mediaType?: AlbumDiscPropertiesContractMediaTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
