import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStopPointSearchQueryParams extends SpeakeasyBase {
    faresOnly?: boolean;
    includeHubs?: boolean;
    lines?: string[];
    maxResults?: number;
    modes?: string[];
    query: string;
    tflOperatedNationalRailStationsOnly?: boolean;
}
export declare class GetStopPointSearchRequest extends SpeakeasyBase {
    queryParams: GetStopPointSearchQueryParams;
}
export declare class GetStopPointSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesSearchResponse?: shared.TflApiPresentationEntitiesSearchResponse;
}
