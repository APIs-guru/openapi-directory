import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineDisruptionPathParams extends SpeakeasyBase {
    ids: string[];
}
export declare class LineDisruptionRequest extends SpeakeasyBase {
    pathParams: LineDisruptionPathParams;
}
export declare class LineDisruptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesDisruptions?: shared.TflApiPresentationEntitiesDisruption[];
}
