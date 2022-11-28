import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShotstackDestination } from "./shotstackdestination";
import { Poster } from "./poster";
import { Range } from "./range";
import { Size } from "./size";
import { Thumbnail } from "./thumbnail";


export enum OutputAspectRatioEnum {
    Sixteen9 = "16:9",
    Nine16 = "9:16",
    One1 = "1:1",
    Four5 = "4:5",
    Four3 = "4:3"
}

export enum OutputFormatEnum {
    Mp4 = "mp4",
    Gif = "gif",
    Mp3 = "mp3",
    Jpg = "jpg",
    Png = "png",
    Bmp = "bmp"
}

export enum OutputQualityEnum {
    Low = "low",
    Medium = "medium",
    High = "high"
}

export enum OutputResolutionEnum {
    Preview = "preview",
    Mobile = "mobile",
    Sd = "sd",
    Hd = "hd",
    OneThousandAndEighty = "1080"
}

export enum OutputScaleToEnum {
    Preview = "preview",
    Mobile = "mobile",
    Sd = "sd",
    Hd = "hd",
    OneThousandAndEighty = "1080"
}


// Output
/** 
 * The output format, render range and type of media to generate.
**/
export class Output extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspectRatio" })
  aspectRatio?: OutputAspectRatioEnum;

  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations?: any[];

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: OutputFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=fps" })
  fps?: number;

  @SpeakeasyMetadata({ data: "json, name=poster" })
  poster?: Poster;

  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality?: OutputQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: Range;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: OutputResolutionEnum;

  @SpeakeasyMetadata({ data: "json, name=scaleTo" })
  scaleTo?: OutputScaleToEnum;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: Size;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: Thumbnail;
}
