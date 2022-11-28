import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BikePointSearchQueryParams extends SpeakeasyBase {
    query: string;
}
export declare class BikePointSearchRequest extends SpeakeasyBase {
    queryParams: BikePointSearchQueryParams;
}
export declare class BikePointSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
