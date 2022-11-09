import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PriceRangeTypeEnum {
    Standard = "standard"
}


// PriceRange
/** 
 * PriceRange
**/
export class PriceRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=min" })
  min?: number;

  @Metadata({ data: "json, name=type" })
  type?: PriceRangeTypeEnum;
}
