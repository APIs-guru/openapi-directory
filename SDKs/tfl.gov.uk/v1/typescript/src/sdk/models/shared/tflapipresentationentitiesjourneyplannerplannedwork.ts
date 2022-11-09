import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesJourneyPlannerPlannedWork extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdDateTime" })
  createdDateTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastUpdateDateTime" })
  lastUpdateDateTime?: Date;
}
