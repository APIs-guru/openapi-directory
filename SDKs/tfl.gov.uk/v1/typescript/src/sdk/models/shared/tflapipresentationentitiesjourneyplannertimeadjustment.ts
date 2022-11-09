import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesJourneyPlannerTimeAdjustment extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=time" })
  time?: string;

  @Metadata({ data: "json, name=timeIs" })
  timeIs?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
