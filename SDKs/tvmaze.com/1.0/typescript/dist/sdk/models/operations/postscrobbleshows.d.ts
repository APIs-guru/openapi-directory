import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostScrobbleShowsQueryParams extends SpeakeasyBase {
    imdbId?: number;
    thetvdbId?: number;
    tvmazeId?: number;
}
export declare class PostScrobbleShowsRequestBody extends SpeakeasyBase {
    airdate?: Date;
    episode?: number;
    markedAt?: number;
    season?: number;
    type?: any;
}
export declare class PostScrobbleShowsRequest extends SpeakeasyBase {
    queryParams: PostScrobbleShowsQueryParams;
    request?: PostScrobbleShowsRequestBody[];
}
export declare class PostScrobbleShowsResponse extends SpeakeasyBase {
    bulkResponse?: any[];
    contentType: string;
    statusCode: number;
}
