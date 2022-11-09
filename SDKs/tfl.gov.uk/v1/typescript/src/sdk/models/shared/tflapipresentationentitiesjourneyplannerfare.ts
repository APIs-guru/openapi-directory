import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesJourneyPlannerFareTap } from "./tflapipresentationentitiesjourneyplannerfaretap";


export class TflApiPresentationEntitiesJourneyPlannerFare extends SpeakeasyBase {
  @Metadata({ data: "json, name=chargeLevel" })
  chargeLevel?: string;

  @Metadata({ data: "json, name=chargeProfileName" })
  chargeProfileName?: string;

  @Metadata({ data: "json, name=cost" })
  cost?: number;

  @Metadata({ data: "json, name=highZone" })
  highZone?: number;

  @Metadata({ data: "json, name=isHopperFare" })
  isHopperFare?: boolean;

  @Metadata({ data: "json, name=lowZone" })
  lowZone?: number;

  @Metadata({ data: "json, name=offPeak" })
  offPeak?: number;

  @Metadata({ data: "json, name=peak" })
  peak?: number;

  @Metadata({ data: "json, name=taps", elemType: shared.TflApiPresentationEntitiesJourneyPlannerFareTap })
  taps?: TflApiPresentationEntitiesJourneyPlannerFareTap[];
}
