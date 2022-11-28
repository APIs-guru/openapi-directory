import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchBusSchedulesQueryParams extends SpeakeasyBase {
    query: string;
}
export declare class SearchBusSchedulesRequest extends SpeakeasyBase {
    queryParams: SearchBusSchedulesQueryParams;
}
export declare class SearchBusSchedulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesSearchResponse?: shared.TflApiPresentationEntitiesSearchResponse;
}
