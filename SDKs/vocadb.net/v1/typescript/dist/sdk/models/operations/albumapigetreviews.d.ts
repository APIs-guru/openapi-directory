import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AlbumApiGetReviewsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class AlbumApiGetReviewsQueryParams extends SpeakeasyBase {
    languageCode?: string;
}
export declare class AlbumApiGetReviewsRequest extends SpeakeasyBase {
    pathParams: AlbumApiGetReviewsPathParams;
    queryParams: AlbumApiGetReviewsQueryParams;
}
export declare class AlbumApiGetReviewsResponse extends SpeakeasyBase {
    albumReviewContracts?: shared.AlbumReviewContract[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
