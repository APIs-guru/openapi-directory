import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BikePointGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class BikePointGetRequest extends SpeakeasyBase {
    pathParams: BikePointGetPathParams;
}
export declare class BikePointGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPlace?: shared.TflApiPresentationEntitiesPlace;
}
