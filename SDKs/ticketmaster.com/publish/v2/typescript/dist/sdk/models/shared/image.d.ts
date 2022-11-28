import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImageRatioEnum {
    OneHundredAndSixtyNine = "169",
    ThirtyTwo = "32",
    FortyThree = "43"
}
/**
 * Image
**/
export declare class Image extends SpeakeasyBase {
    attribution?: string;
    domains?: string[];
    fallback?: boolean;
    height?: number;
    ratio?: ImageRatioEnum;
    url?: string;
    width?: number;
}
