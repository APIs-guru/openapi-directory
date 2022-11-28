import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPassengerFlow } from "./tflapipresentationentitiespassengerflow";
import { TflApiPresentationEntitiesTrainLoading } from "./tflapipresentationentitiestrainloading";
export declare class TflApiPresentationEntitiesCrowding extends SpeakeasyBase {
    passengerFlows?: TflApiPresentationEntitiesPassengerFlow[];
    trainLoadings?: TflApiPresentationEntitiesTrainLoading[];
}
