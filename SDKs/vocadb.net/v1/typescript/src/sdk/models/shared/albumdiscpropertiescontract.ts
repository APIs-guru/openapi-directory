import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AlbumDiscPropertiesContractMediaTypeEnum {
    Audio = "Audio",
    Video = "Video"
}


export class AlbumDiscPropertiesContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discNumber" })
  discNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=mediaType" })
  mediaType?: AlbumDiscPropertiesContractMediaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
