import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A year-specific event insight object expressed as a JSON string, separated in to `qual` and `playoff` fields. See also Event_Insights_2016, Event_Insights_2017, etc.
**/
export declare class EventInsights extends SpeakeasyBase {
    playoff?: Map<string, any>;
    qual?: Map<string, any>;
}
