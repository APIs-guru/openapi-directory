import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineStatusBySeverityPathParams extends SpeakeasyBase {
    severity: number;
}
export declare class LineStatusBySeverityRequest extends SpeakeasyBase {
    pathParams: LineStatusBySeverityPathParams;
}
export declare class LineStatusBySeverityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
