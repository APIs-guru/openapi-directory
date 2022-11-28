import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModeGetActiveServiceTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesActiveServiceTypes?: shared.TflApiPresentationEntitiesActiveServiceType[];
}
