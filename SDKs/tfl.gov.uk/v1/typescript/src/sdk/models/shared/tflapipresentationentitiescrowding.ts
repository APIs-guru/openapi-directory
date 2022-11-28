import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPassengerFlow } from "./tflapipresentationentitiespassengerflow";
import { TflApiPresentationEntitiesTrainLoading } from "./tflapipresentationentitiestrainloading";



export class TflApiPresentationEntitiesCrowding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=passengerFlows", elemType: TflApiPresentationEntitiesPassengerFlow })
  passengerFlows?: TflApiPresentationEntitiesPassengerFlow[];

  @SpeakeasyMetadata({ data: "json, name=trainLoadings", elemType: TflApiPresentationEntitiesTrainLoading })
  trainLoadings?: TflApiPresentationEntitiesTrainLoading[];
}
