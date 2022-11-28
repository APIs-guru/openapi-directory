import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OccupancyGetBikePointsOccupanciesPathParams extends SpeakeasyBase {
    ids: string[];
}
export declare class OccupancyGetBikePointsOccupanciesRequest extends SpeakeasyBase {
    pathParams: OccupancyGetBikePointsOccupanciesPathParams;
}
export declare class OccupancyGetBikePointsOccupanciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesBikePointOccupancies?: shared.TflApiPresentationEntitiesBikePointOccupancy[];
}
