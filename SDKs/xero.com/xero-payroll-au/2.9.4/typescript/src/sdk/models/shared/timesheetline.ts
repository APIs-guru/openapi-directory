import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimesheetLineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EarningsRateID" })
  earningsRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number[];

  @SpeakeasyMetadata({ data: "json, name=TrackingItemID" })
  trackingItemId?: string;
}


export class TimesheetLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EarningsRateID" })
  earningsRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number[];

  @SpeakeasyMetadata({ data: "json, name=TrackingItemID" })
  trackingItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;
}
