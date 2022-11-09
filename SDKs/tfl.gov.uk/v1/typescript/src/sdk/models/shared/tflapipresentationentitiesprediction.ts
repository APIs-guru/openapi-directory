import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TflApiPresentationEntitiesPredictionTiming } from "./tflapipresentationentitiespredictiontiming";


// TflApiPresentationEntitiesPrediction
/** 
 * DTO to capture the prediction details
**/
export class TflApiPresentationEntitiesPrediction extends SpeakeasyBase {
  @Metadata({ data: "json, name=bearing" })
  bearing?: string;

  @Metadata({ data: "json, name=currentLocation" })
  currentLocation?: string;

  @Metadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @Metadata({ data: "json, name=destinationNaptanId" })
  destinationNaptanId?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=expectedArrival" })
  expectedArrival?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lineId" })
  lineId?: string;

  @Metadata({ data: "json, name=lineName" })
  lineName?: string;

  @Metadata({ data: "json, name=modeName" })
  modeName?: string;

  @Metadata({ data: "json, name=naptanId" })
  naptanId?: string;

  @Metadata({ data: "json, name=operationType" })
  operationType?: number;

  @Metadata({ data: "json, name=platformName" })
  platformName?: string;

  @Metadata({ data: "json, name=stationName" })
  stationName?: string;

  @Metadata({ data: "json, name=timeToLive" })
  timeToLive?: Date;

  @Metadata({ data: "json, name=timeToStation" })
  timeToStation?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=timing" })
  timing?: TflApiPresentationEntitiesPredictionTiming;

  @Metadata({ data: "json, name=towards" })
  towards?: string;

  @Metadata({ data: "json, name=vehicleId" })
  vehicleId?: string;
}
