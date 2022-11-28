import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JourneyMetaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesModes?: shared.TflApiPresentationEntitiesMode[];
}
