import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineGetPathParams extends SpeakeasyBase {
    ids: string[];
}
export declare class LineGetRequest extends SpeakeasyBase {
    pathParams: LineGetPathParams;
}
export declare class LineGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
