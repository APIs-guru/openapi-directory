import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PriceRangeTypeEnum {
    Standard = "standard"
}


// PriceRange
/** 
 * PriceRange
**/
export class PriceRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PriceRangeTypeEnum;
}
