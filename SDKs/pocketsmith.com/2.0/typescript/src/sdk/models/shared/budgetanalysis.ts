import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Period } from "./period";



export class BudgetAnalysis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average_actual_amount" })
  averageActualAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=average_forecast_amount" })
  averageForecastAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=periods", elemType: Period })
  periods?: Period[];

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=total_actual_amount" })
  totalActualAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_forecast_amount" })
  totalForecastAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_over_by" })
  totalOverBy?: number;

  @SpeakeasyMetadata({ data: "json, name=total_under_by" })
  totalUnderBy?: number;
}
