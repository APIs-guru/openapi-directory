import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStopPointIdPlaceTypesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStopPointIdPlaceTypesQueryParams extends SpeakeasyBase {
    placeTypes: string[];
}
export declare class GetStopPointIdPlaceTypesRequest extends SpeakeasyBase {
    pathParams: GetStopPointIdPlaceTypesPathParams;
    queryParams: GetStopPointIdPlaceTypesQueryParams;
}
export declare class GetStopPointIdPlaceTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
