import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesJourneyPlannerPlannedWork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdDateTime" })
  createdDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateDateTime" })
  lastUpdateDateTime?: Date;
}
