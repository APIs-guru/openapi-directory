import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RoadMetaSeveritiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesStatusSeverities?: shared.TflApiPresentationEntitiesStatusSeverity[];
}
