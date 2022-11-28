import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointGetByGeoPointQueryParams extends SpeakeasyBase {
    categories?: string[];
    locationLat: number;
    locationLon: number;
    modes?: string[];
    radius?: number;
    returnLines?: boolean;
    stopTypes: string[];
    useStopPointHierarchy?: boolean;
}
export declare class StopPointGetByGeoPointRequest extends SpeakeasyBase {
    queryParams: StopPointGetByGeoPointQueryParams;
}
export declare class StopPointGetByGeoPointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesStopPointsResponse?: shared.TflApiPresentationEntitiesStopPointsResponse;
}
