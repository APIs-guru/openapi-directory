import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LeaveEarningsLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EarningsRateID" })
  earningsRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=RatePerUnit" })
  ratePerUnit?: number;
}
