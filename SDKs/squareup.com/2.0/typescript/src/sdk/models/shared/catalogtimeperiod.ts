import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogTimePeriod
/** 
 * Represents a time period - either a single period or a repeating period.
**/
export class CatalogTimePeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=event" })
  event?: string;
}
