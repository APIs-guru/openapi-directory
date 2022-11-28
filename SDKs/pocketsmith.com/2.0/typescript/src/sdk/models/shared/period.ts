import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Period extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actual_amount" })
  actualAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: boolean;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=forecast_amount" })
  forecastAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=over_budget" })
  overBudget?: boolean;

  @SpeakeasyMetadata({ data: "json, name=over_by" })
  overBy?: number;

  @SpeakeasyMetadata({ data: "json, name=percentage_used" })
  percentageUsed?: number;

  @SpeakeasyMetadata({ data: "json, name=refund_amound" })
  refundAmound?: number;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=under_budget" })
  underBudget?: boolean;

  @SpeakeasyMetadata({ data: "json, name=under_by" })
  underBy?: number;
}
