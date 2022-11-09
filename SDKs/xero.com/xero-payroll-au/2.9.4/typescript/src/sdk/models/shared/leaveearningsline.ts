import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LeaveEarningsLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=EarningsRateID" })
  earningsRateId?: string;

  @Metadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;

  @Metadata({ data: "json, name=RatePerUnit" })
  ratePerUnit?: number;
}
