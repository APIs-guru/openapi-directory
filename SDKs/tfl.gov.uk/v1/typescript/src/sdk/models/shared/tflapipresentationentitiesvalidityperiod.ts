import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TflApiPresentationEntitiesValidityPeriod
/** 
 * Represents a period for which a planned works is valid.
**/
export class TflApiPresentationEntitiesValidityPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=isNow" })
  isNow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: Date;
}
