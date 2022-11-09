import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Period } from "./period";


export class BudgetAnalysis extends SpeakeasyBase {
  @Metadata({ data: "json, name=average_actual_amount" })
  averageActualAmount?: number;

  @Metadata({ data: "json, name=average_forecast_amount" })
  averageForecastAmount?: number;

  @Metadata({ data: "json, name=end_date" })
  endDate?: string;

  @Metadata({ data: "json, name=periods", elemType: shared.Period })
  periods?: Period[];

  @Metadata({ data: "json, name=start_date" })
  startDate?: string;

  @Metadata({ data: "json, name=total_actual_amount" })
  totalActualAmount?: number;

  @Metadata({ data: "json, name=total_forecast_amount" })
  totalForecastAmount?: number;

  @Metadata({ data: "json, name=total_over_by" })
  totalOverBy?: number;

  @Metadata({ data: "json, name=total_under_by" })
  totalUnderBy?: number;
}
