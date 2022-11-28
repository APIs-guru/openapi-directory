import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlaceSearchQueryParams extends SpeakeasyBase {
    name: string;
    types?: string[];
}
export declare class PlaceSearchRequest extends SpeakeasyBase {
    queryParams: PlaceSearchQueryParams;
}
export declare class PlaceSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
