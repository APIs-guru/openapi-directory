import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlaceGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PlaceGetQueryParams extends SpeakeasyBase {
    includeChildren?: boolean;
}
export declare class PlaceGetRequest extends SpeakeasyBase {
    pathParams: PlaceGetPathParams;
    queryParams: PlaceGetQueryParams;
}
export declare class PlaceGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
