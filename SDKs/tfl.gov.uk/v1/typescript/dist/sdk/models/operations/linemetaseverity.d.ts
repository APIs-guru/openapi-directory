import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineMetaSeverityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesStatusSeverities?: shared.TflApiPresentationEntitiesStatusSeverity[];
}
