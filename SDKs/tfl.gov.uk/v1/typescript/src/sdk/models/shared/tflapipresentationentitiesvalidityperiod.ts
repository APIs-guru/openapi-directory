import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TflApiPresentationEntitiesValidityPeriod
/** 
 * Represents a period for which a planned works is valid.
**/
export class TflApiPresentationEntitiesValidityPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=fromDate" })
  fromDate?: Date;

  @Metadata({ data: "json, name=isNow" })
  isNow?: boolean;

  @Metadata({ data: "json, name=toDate" })
  toDate?: Date;
}
