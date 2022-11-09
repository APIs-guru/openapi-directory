import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PhotoTypeEnum {
    Photo = "photo"
}


export class Photo extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=media_key" })
  mediaKey?: string;

  @Metadata({ data: "json, name=type" })
  type?: PhotoTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
