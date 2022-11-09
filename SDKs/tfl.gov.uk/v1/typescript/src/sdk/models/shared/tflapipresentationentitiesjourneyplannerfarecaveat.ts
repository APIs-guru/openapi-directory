import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesJourneyPlannerFareCaveat extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
