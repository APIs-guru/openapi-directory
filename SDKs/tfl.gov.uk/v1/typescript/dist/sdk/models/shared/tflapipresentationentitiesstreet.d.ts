import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesStreetSegment } from "./tflapipresentationentitiesstreetsegment";
export declare class TflApiPresentationEntitiesStreet extends SpeakeasyBase {
    closure?: string;
    directions?: string;
    name?: string;
    segments?: TflApiPresentationEntitiesStreetSegment[];
    sourceSystemId?: number;
    sourceSystemKey?: string;
}
