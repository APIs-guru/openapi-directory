import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Period extends SpeakeasyBase {
  @Metadata({ data: "json, name=actual_amount" })
  actualAmount?: number;

  @Metadata({ data: "json, name=current" })
  current?: boolean;

  @Metadata({ data: "json, name=end_date" })
  endDate?: string;

  @Metadata({ data: "json, name=forecast_amount" })
  forecastAmount?: number;

  @Metadata({ data: "json, name=over_budget" })
  overBudget?: boolean;

  @Metadata({ data: "json, name=over_by" })
  overBy?: number;

  @Metadata({ data: "json, name=percentage_used" })
  percentageUsed?: number;

  @Metadata({ data: "json, name=refund_amound" })
  refundAmound?: number;

  @Metadata({ data: "json, name=start_date" })
  startDate?: string;

  @Metadata({ data: "json, name=under_budget" })
  underBudget?: boolean;

  @Metadata({ data: "json, name=under_by" })
  underBy?: number;
}
