import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesJourneyPlannerJourneyVector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=via" })
  via?: string;
}
