import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesJourneyPlannerFareTapDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=busRouteId" })
  busRouteId?: string;

  @SpeakeasyMetadata({ data: "json, name=hostDeviceType" })
  hostDeviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=modeType" })
  modeType?: string;

  @SpeakeasyMetadata({ data: "json, name=nationalLocationCode" })
  nationalLocationCode?: number;

  @SpeakeasyMetadata({ data: "json, name=tapTimestamp" })
  tapTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=validationType" })
  validationType?: string;
}
