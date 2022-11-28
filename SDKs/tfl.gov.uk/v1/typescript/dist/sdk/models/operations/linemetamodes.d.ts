import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineMetaModesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesModes?: shared.TflApiPresentationEntitiesMode[];
}
