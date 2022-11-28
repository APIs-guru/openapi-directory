import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Set a custom size for a video or image. When using a custom size omit the `resolution` and `aspectRatio`. Custom sizes must be divisible by 2 based on the encoder specifications.
**/
export declare class Size extends SpeakeasyBase {
    height?: number;
    width?: number;
}
