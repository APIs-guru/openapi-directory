import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScrobbleShowsShowIdPathParams extends SpeakeasyBase {
    showId: number;
}
export declare enum GetScrobbleShowsShowIdEmbedEnum {
    Episode = "episode"
}
export declare class GetScrobbleShowsShowIdQueryParams extends SpeakeasyBase {
    embed?: GetScrobbleShowsShowIdEmbedEnum;
}
export declare class GetScrobbleShowsShowIdRequest extends SpeakeasyBase {
    pathParams: GetScrobbleShowsShowIdPathParams;
    queryParams: GetScrobbleShowsShowIdQueryParams;
}
export declare class GetScrobbleShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    markedEpisodes?: shared.MarkedEpisode[];
    statusCode: number;
}
