import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OccupancyGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OccupancyGetRequest extends SpeakeasyBase {
    pathParams: OccupancyGetPathParams;
}
export declare class OccupancyGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesCarParkOccupancy?: shared.TflApiPresentationEntitiesCarParkOccupancy;
}
