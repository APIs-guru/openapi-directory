import { SpeakeasyBase } from "../../../internal/utils";
import { Period } from "./period";
export declare class BudgetAnalysis extends SpeakeasyBase {
    averageActualAmount?: number;
    averageForecastAmount?: number;
    endDate?: string;
    periods?: Period[];
    startDate?: string;
    totalActualAmount?: number;
    totalForecastAmount?: number;
    totalOverBy?: number;
    totalUnderBy?: number;
}
