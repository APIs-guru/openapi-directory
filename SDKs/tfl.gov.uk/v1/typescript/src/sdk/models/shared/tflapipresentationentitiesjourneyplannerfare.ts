import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerFareTap } from "./tflapipresentationentitiesjourneyplannerfaretap";



export class TflApiPresentationEntitiesJourneyPlannerFare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeLevel" })
  chargeLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeProfileName" })
  chargeProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=highZone" })
  highZone?: number;

  @SpeakeasyMetadata({ data: "json, name=isHopperFare" })
  isHopperFare?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lowZone" })
  lowZone?: number;

  @SpeakeasyMetadata({ data: "json, name=offPeak" })
  offPeak?: number;

  @SpeakeasyMetadata({ data: "json, name=peak" })
  peak?: number;

  @SpeakeasyMetadata({ data: "json, name=taps", elemType: TflApiPresentationEntitiesJourneyPlannerFareTap })
  taps?: TflApiPresentationEntitiesJourneyPlannerFareTap[];
}
