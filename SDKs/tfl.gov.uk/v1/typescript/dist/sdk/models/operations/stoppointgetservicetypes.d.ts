import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointGetServiceTypesQueryParams extends SpeakeasyBase {
    id: string;
    lineIds?: string[];
    modes?: string[];
}
export declare class StopPointGetServiceTypesRequest extends SpeakeasyBase {
    queryParams: StopPointGetServiceTypesQueryParams;
}
export declare class StopPointGetServiceTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesLineServiceTypes?: shared.TflApiPresentationEntitiesLineServiceType[];
}
