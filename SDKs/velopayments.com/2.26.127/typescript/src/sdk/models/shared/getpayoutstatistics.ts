import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPayoutStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=thisMonthFailedPaymentsCount" })
  thisMonthFailedPaymentsCount: number;

  @Metadata({ data: "json, name=thisMonthPayoutsCount" })
  thisMonthPayoutsCount: number;
}
