import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlaceGetByTypePathParams extends SpeakeasyBase {
    types: string[];
}
export declare class PlaceGetByTypeQueryParams extends SpeakeasyBase {
    activeOnly?: boolean;
}
export declare class PlaceGetByTypeRequest extends SpeakeasyBase {
    pathParams: PlaceGetByTypePathParams;
    queryParams: PlaceGetByTypeQueryParams;
}
export declare class PlaceGetByTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
