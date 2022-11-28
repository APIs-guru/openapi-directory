import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineStatusByModePathParams extends SpeakeasyBase {
    modes: string[];
}
export declare class LineStatusByModeQueryParams extends SpeakeasyBase {
    detail?: boolean;
    severityLevel?: string;
}
export declare class LineStatusByModeRequest extends SpeakeasyBase {
    pathParams: LineStatusByModePathParams;
    queryParams: LineStatusByModeQueryParams;
}
export declare class LineStatusByModeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
