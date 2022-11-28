import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostScrobbleEpisodesRequestBody extends SpeakeasyBase {
    episodeId?: number;
    markedAt?: number;
    type?: any;
}
export declare class PostScrobbleEpisodesRequest extends SpeakeasyBase {
    request?: PostScrobbleEpisodesRequestBody[];
}
export declare class PostScrobbleEpisodesResponse extends SpeakeasyBase {
    bulkResponse?: any[];
    contentType: string;
    statusCode: number;
}
