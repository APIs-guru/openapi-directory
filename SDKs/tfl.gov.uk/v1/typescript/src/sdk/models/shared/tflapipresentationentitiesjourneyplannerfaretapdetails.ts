import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesJourneyPlannerFareTapDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=busRouteId" })
  busRouteId?: string;

  @Metadata({ data: "json, name=hostDeviceType" })
  hostDeviceType?: string;

  @Metadata({ data: "json, name=modeType" })
  modeType?: string;

  @Metadata({ data: "json, name=nationalLocationCode" })
  nationalLocationCode?: number;

  @Metadata({ data: "json, name=tapTimestamp" })
  tapTimestamp?: Date;

  @Metadata({ data: "json, name=validationType" })
  validationType?: string;
}
