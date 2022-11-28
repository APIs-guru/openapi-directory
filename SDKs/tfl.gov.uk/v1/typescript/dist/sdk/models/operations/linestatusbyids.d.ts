import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineStatusByIdsPathParams extends SpeakeasyBase {
    ids: string[];
}
export declare class LineStatusByIdsQueryParams extends SpeakeasyBase {
    detail?: boolean;
}
export declare class LineStatusByIdsRequest extends SpeakeasyBase {
    pathParams: LineStatusByIdsPathParams;
    queryParams: LineStatusByIdsQueryParams;
}
export declare class LineStatusByIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
