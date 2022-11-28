import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModeArrivalsPathParams extends SpeakeasyBase {
    mode: string;
}
export declare class ModeArrivalsQueryParams extends SpeakeasyBase {
    count?: number;
}
export declare class ModeArrivalsRequest extends SpeakeasyBase {
    pathParams: ModeArrivalsPathParams;
    queryParams: ModeArrivalsQueryParams;
}
export declare class ModeArrivalsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPredictions?: shared.TflApiPresentationEntitiesPrediction[];
}
