import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesJourneyPlannerJourneyVector extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=via" })
  via?: string;
}
