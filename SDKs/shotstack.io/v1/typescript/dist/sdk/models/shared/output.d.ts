import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Poster } from "./poster";
import { Range } from "./range";
import { Size } from "./size";
import { Thumbnail } from "./thumbnail";
export declare enum OutputAspectRatioEnum {
    Sixteen9 = "16:9",
    Nine16 = "9:16",
    One1 = "1:1",
    Four5 = "4:5",
    Four3 = "4:3"
}
export declare enum OutputFormatEnum {
    Mp4 = "mp4",
    Gif = "gif",
    Mp3 = "mp3",
    Jpg = "jpg",
    Png = "png",
    Bmp = "bmp"
}
export declare enum OutputQualityEnum {
    Low = "low",
    Medium = "medium",
    High = "high"
}
export declare enum OutputResolutionEnum {
    Preview = "preview",
    Mobile = "mobile",
    Sd = "sd",
    Hd = "hd",
    OneThousandAndEighty = "1080"
}
export declare enum OutputScaleToEnum {
    Preview = "preview",
    Mobile = "mobile",
    Sd = "sd",
    Hd = "hd",
    OneThousandAndEighty = "1080"
}
/**
 * The output format, render range and type of media to generate.
**/
export declare class Output extends SpeakeasyBase {
    aspectRatio?: OutputAspectRatioEnum;
    destinations?: any[];
    format: OutputFormatEnum;
    fps?: number;
    poster?: Poster;
    quality?: OutputQualityEnum;
    range?: Range;
    resolution?: OutputResolutionEnum;
    scaleTo?: OutputScaleToEnum;
    size?: Size;
    thumbnail?: Thumbnail;
}
