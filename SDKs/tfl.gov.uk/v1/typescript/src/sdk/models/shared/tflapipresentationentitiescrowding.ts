import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesPassengerFlow } from "./tflapipresentationentitiespassengerflow";
import { TflApiPresentationEntitiesTrainLoading } from "./tflapipresentationentitiestrainloading";


export class TflApiPresentationEntitiesCrowding extends SpeakeasyBase {
  @Metadata({ data: "json, name=passengerFlows", elemType: shared.TflApiPresentationEntitiesPassengerFlow })
  passengerFlows?: TflApiPresentationEntitiesPassengerFlow[];

  @Metadata({ data: "json, name=trainLoadings", elemType: shared.TflApiPresentationEntitiesTrainLoading })
  trainLoadings?: TflApiPresentationEntitiesTrainLoading[];
}
