import { SpeakeasyBase } from "../../../internal/utils";
import { MonthSummary } from "./monthsummary";
export declare class MonthSummariesResponseData extends SpeakeasyBase {
    months: MonthSummary[];
    serverKnowledge: number;
}
export declare class MonthSummariesResponse extends SpeakeasyBase {
    data: MonthSummariesResponseData;
}
