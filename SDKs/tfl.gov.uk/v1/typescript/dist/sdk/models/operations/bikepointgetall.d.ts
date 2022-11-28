import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BikePointGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
