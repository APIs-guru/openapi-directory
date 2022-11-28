import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointGetCarParksByIdPathParams extends SpeakeasyBase {
    stopPointId: string;
}
export declare class StopPointGetCarParksByIdRequest extends SpeakeasyBase {
    pathParams: StopPointGetCarParksByIdPathParams;
}
export declare class StopPointGetCarParksByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
