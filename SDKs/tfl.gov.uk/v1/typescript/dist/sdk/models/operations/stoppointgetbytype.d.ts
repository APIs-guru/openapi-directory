import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointGetByTypePathParams extends SpeakeasyBase {
    types: string[];
}
export declare class StopPointGetByTypeRequest extends SpeakeasyBase {
    pathParams: StopPointGetByTypePathParams;
}
export declare class StopPointGetByTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
