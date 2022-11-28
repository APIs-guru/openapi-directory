import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointSearchPathParams extends SpeakeasyBase {
    query: string;
}
export declare class StopPointSearchQueryParams extends SpeakeasyBase {
    faresOnly?: boolean;
    includeHubs?: boolean;
    lines?: string[];
    maxResults?: number;
    modes?: string[];
    tflOperatedNationalRailStationsOnly?: boolean;
}
export declare class StopPointSearchRequest extends SpeakeasyBase {
    pathParams: StopPointSearchPathParams;
    queryParams: StopPointSearchQueryParams;
}
export declare class StopPointSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesSearchResponse?: shared.TflApiPresentationEntitiesSearchResponse;
}
