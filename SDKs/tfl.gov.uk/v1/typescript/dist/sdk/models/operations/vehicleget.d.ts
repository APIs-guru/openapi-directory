import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VehicleGetPathParams extends SpeakeasyBase {
    ids: string[];
}
export declare class VehicleGetRequest extends SpeakeasyBase {
    pathParams: VehicleGetPathParams;
}
export declare class VehicleGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPredictions?: shared.TflApiPresentationEntitiesPrediction[];
}
