import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointArrivalsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StopPointArrivalsRequest extends SpeakeasyBase {
    pathParams: StopPointArrivalsPathParams;
}
export declare class StopPointArrivalsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPredictions?: shared.TflApiPresentationEntitiesPrediction[];
}
