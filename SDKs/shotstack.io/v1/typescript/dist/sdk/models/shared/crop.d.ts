import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Crop the sides of an asset by a relative amount. The size of the crop is specified using a scale between 0 and 1, relative to the screen width - i.e a left crop of 0.5 will crop half of the asset from the left, a top crop  of 0.25 will crop the top by quarter of the asset.
**/
export declare class Crop extends SpeakeasyBase {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}
