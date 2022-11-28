import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineGetByModePathParams extends SpeakeasyBase {
    modes: string[];
}
export declare class LineGetByModeRequest extends SpeakeasyBase {
    pathParams: LineGetByModePathParams;
}
export declare class LineGetByModeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
