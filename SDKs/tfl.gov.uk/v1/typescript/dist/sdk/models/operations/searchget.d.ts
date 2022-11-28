import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchGetQueryParams extends SpeakeasyBase {
    query: string;
}
export declare class SearchGetRequest extends SpeakeasyBase {
    queryParams: SearchGetQueryParams;
}
export declare class SearchGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesSearchResponse?: shared.TflApiPresentationEntitiesSearchResponse;
}
