import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineDisruptionByModePathParams extends SpeakeasyBase {
    modes: string[];
}
export declare class LineDisruptionByModeRequest extends SpeakeasyBase {
    pathParams: LineDisruptionByModePathParams;
}
export declare class LineDisruptionByModeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesDisruptions?: shared.TflApiPresentationEntitiesDisruption[];
}
