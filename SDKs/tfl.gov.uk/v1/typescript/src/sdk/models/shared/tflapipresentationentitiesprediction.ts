import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPredictionTiming } from "./tflapipresentationentitiespredictiontiming";



// TflApiPresentationEntitiesPrediction
/** 
 * DTO to capture the prediction details
**/
export class TflApiPresentationEntitiesPrediction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bearing" })
  bearing?: string;

  @SpeakeasyMetadata({ data: "json, name=currentLocation" })
  currentLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationNaptanId" })
  destinationNaptanId?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=expectedArrival" })
  expectedArrival?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lineId" })
  lineId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineName" })
  lineName?: string;

  @SpeakeasyMetadata({ data: "json, name=modeName" })
  modeName?: string;

  @SpeakeasyMetadata({ data: "json, name=naptanId" })
  naptanId?: string;

  @SpeakeasyMetadata({ data: "json, name=operationType" })
  operationType?: number;

  @SpeakeasyMetadata({ data: "json, name=platformName" })
  platformName?: string;

  @SpeakeasyMetadata({ data: "json, name=stationName" })
  stationName?: string;

  @SpeakeasyMetadata({ data: "json, name=timeToLive" })
  timeToLive?: Date;

  @SpeakeasyMetadata({ data: "json, name=timeToStation" })
  timeToStation?: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=timing" })
  timing?: TflApiPresentationEntitiesPredictionTiming;

  @SpeakeasyMetadata({ data: "json, name=towards" })
  towards?: string;

  @SpeakeasyMetadata({ data: "json, name=vehicleId" })
  vehicleId?: string;
}
