import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RoadDisruptionPathParams extends SpeakeasyBase {
    ids: string[];
}
export declare class RoadDisruptionQueryParams extends SpeakeasyBase {
    categories?: string[];
    closures?: boolean;
    severities?: string[];
    stripContent?: boolean;
}
export declare class RoadDisruptionRequest extends SpeakeasyBase {
    pathParams: RoadDisruptionPathParams;
    queryParams: RoadDisruptionQueryParams;
}
export declare class RoadDisruptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesRoadDisruptions?: shared.TflApiPresentationEntitiesRoadDisruption[];
}
