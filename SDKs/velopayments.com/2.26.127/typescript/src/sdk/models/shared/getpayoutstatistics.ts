import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPayoutStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thisMonthFailedPaymentsCount" })
  thisMonthFailedPaymentsCount: number;

  @SpeakeasyMetadata({ data: "json, name=thisMonthPayoutsCount" })
  thisMonthPayoutsCount: number;
}
