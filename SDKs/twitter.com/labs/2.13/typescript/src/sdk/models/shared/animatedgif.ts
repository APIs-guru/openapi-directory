import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AnimatedGifTypeEnum {
    AnimatedGif = "animated_gif"
}


export class AnimatedGif extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=media_key" })
  mediaKey?: string;

  @Metadata({ data: "json, name=preview_image_url" })
  previewImageUrl?: string;

  @Metadata({ data: "json, name=type" })
  type?: AnimatedGifTypeEnum;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
