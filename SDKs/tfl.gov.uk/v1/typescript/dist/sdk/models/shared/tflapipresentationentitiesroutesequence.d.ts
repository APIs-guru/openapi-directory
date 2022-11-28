import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesOrderedRoute } from "./tflapipresentationentitiesorderedroute";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";
import { TflApiPresentationEntitiesStopPointSequence } from "./tflapipresentationentitiesstoppointsequence";
export declare class TflApiPresentationEntitiesRouteSequence extends SpeakeasyBase {
    direction?: string;
    isOutboundOnly?: boolean;
    lineId?: string;
    lineName?: string;
    lineStrings?: string[];
    mode?: string;
    orderedLineRoutes?: TflApiPresentationEntitiesOrderedRoute[];
    stations?: TflApiPresentationEntitiesMatchedStop[];
    stopPointSequences?: TflApiPresentationEntitiesStopPointSequence[];
}
