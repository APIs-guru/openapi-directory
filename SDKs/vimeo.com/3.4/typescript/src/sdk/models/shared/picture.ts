import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PictureSizes extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height: number;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=link_with_play_button" })
  linkWithPlayButton?: string;

  @Metadata({ data: "json, name=width" })
  width: number;
}

export enum PictureTypeEnum {
    Caution = "caution"
,    Custom = "custom"
,    Default = "default"
}


export class Picture extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=resource_key" })
  resourceKey: string;

  @Metadata({ data: "json, name=sizes", elemType: shared.PictureSizes })
  sizes: PictureSizes[];

  @Metadata({ data: "json, name=type" })
  type: PictureTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
