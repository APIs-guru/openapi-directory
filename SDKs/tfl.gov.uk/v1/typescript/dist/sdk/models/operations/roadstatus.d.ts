import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RoadStatusPathParams extends SpeakeasyBase {
    ids: string[];
}
export declare class RoadStatusQueryParams extends SpeakeasyBase {
    dateRangeNullableEndDate?: Date;
    dateRangeNullableStartDate?: Date;
}
export declare class RoadStatusRequest extends SpeakeasyBase {
    pathParams: RoadStatusPathParams;
    queryParams: RoadStatusQueryParams;
}
export declare class RoadStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesRoadCorridors?: shared.TflApiPresentationEntitiesRoadCorridor[];
}
