import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ImageRatioEnum {
    OneHundredAndSixtyNine = "169"
,    ThirtyTwo = "32"
,    FortyThree = "43"
}


// Image
/** 
 * Image
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribution" })
  attribution?: string;

  @Metadata({ data: "json, name=domains" })
  domains?: string[];

  @Metadata({ data: "json, name=fallback" })
  fallback?: boolean;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=ratio" })
  ratio?: ImageRatioEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
