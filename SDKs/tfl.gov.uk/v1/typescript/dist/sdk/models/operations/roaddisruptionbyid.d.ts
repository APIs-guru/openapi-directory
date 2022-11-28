import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RoadDisruptionByIdPathParams extends SpeakeasyBase {
    disruptionIds: string[];
}
export declare class RoadDisruptionByIdQueryParams extends SpeakeasyBase {
    stripContent?: boolean;
}
export declare class RoadDisruptionByIdRequest extends SpeakeasyBase {
    pathParams: RoadDisruptionByIdPathParams;
    queryParams: RoadDisruptionByIdQueryParams;
}
export declare class RoadDisruptionByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesRoadDisruption?: shared.TflApiPresentationEntitiesRoadDisruption;
}
