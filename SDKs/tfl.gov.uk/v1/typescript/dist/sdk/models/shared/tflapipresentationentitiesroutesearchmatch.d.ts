import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesLineRouteSection } from "./tflapipresentationentitieslineroutesection";
import { TflApiPresentationEntitiesMatchedRouteSections } from "./tflapipresentationentitiesmatchedroutesections";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";
export declare class TflApiPresentationEntitiesRouteSearchMatch extends SpeakeasyBase {
    id?: string;
    lat?: number;
    lineId?: string;
    lineName?: string;
    lineRouteSection?: TflApiPresentationEntitiesLineRouteSection[];
    lon?: number;
    matchedRouteSections?: TflApiPresentationEntitiesMatchedRouteSections[];
    matchedStops?: TflApiPresentationEntitiesMatchedStop[];
    mode?: string;
    name?: string;
    url?: string;
}
