import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BusinessHoursPeriod } from "./businesshoursperiod";


// BusinessHours
/** 
 * Represents the hours of operation for a business location.
**/
export class BusinessHours extends SpeakeasyBase {
  @Metadata({ data: "json, name=periods", elemType: shared.BusinessHoursPeriod })
  periods?: BusinessHoursPeriod[];
}
