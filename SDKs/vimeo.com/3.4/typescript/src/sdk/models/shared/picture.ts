import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PictureSizes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=link_with_play_button" })
  linkWithPlayButton?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}

export enum PictureTypeEnum {
    Caution = "caution",
    Custom = "custom",
    Default = "default"
}


export class Picture extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @SpeakeasyMetadata({ data: "json, name=sizes", elemType: PictureSizes })
  sizes: PictureSizes[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PictureTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
