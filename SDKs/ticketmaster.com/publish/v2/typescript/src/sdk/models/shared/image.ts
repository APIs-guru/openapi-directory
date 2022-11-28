import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ImageRatioEnum {
    OneHundredAndSixtyNine = "169",
    ThirtyTwo = "32",
    FortyThree = "43"
}


// Image
/** 
 * Image
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: string;

  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains?: string[];

  @SpeakeasyMetadata({ data: "json, name=fallback" })
  fallback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=ratio" })
  ratio?: ImageRatioEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
