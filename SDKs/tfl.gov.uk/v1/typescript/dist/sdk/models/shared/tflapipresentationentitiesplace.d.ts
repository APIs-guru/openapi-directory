import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesAdditionalProperties } from "./tflapipresentationentitiesadditionalproperties";
export declare class TflApiPresentationEntitiesPlace extends SpeakeasyBase {
    additionalProperties?: TflApiPresentationEntitiesAdditionalProperties[];
    children?: TflApiPresentationEntitiesPlace[];
    childrenUrls?: string[];
    commonName?: string;
    distance?: number;
    id?: string;
    lat?: number;
    lon?: number;
    placeType?: string;
    url?: string;
}
