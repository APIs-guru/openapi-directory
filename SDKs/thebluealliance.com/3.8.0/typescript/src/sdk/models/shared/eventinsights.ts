import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventInsights
/** 
 * A year-specific event insight object expressed as a JSON string, separated in to `qual` and `playoff` fields. See also Event_Insights_2016, Event_Insights_2017, etc.
**/
export class EventInsights extends SpeakeasyBase {
  @Metadata({ data: "json, name=playoff" })
  playoff?: Map<string, any>;

  @Metadata({ data: "json, name=qual" })
  qual?: Map<string, any>;
}
