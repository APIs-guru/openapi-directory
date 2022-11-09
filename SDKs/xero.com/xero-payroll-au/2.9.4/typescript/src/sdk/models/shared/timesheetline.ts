import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimesheetLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=EarningsRateID" })
  earningsRateId?: string;

  @Metadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number[];

  @Metadata({ data: "json, name=TrackingItemID" })
  trackingItemId?: string;

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;
}
