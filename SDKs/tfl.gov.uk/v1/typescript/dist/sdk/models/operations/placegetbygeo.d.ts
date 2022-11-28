import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlaceGetByGeoQueryParams extends SpeakeasyBase {
    activeOnly?: boolean;
    categories?: string[];
    includeChildren?: boolean;
    numberOfPlacesToReturn?: number;
    placeGeoLat?: number;
    placeGeoLon?: number;
    placeGeoNeLat?: number;
    placeGeoNeLon?: number;
    placeGeoSwLat?: number;
    placeGeoSwLon?: number;
    radius?: number;
    type?: string[];
}
export declare class PlaceGetByGeoRequest extends SpeakeasyBase {
    queryParams: PlaceGetByGeoQueryParams;
}
export declare class PlaceGetByGeoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
