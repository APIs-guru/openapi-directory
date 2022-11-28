import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserEpisodesQueryParams extends SpeakeasyBase {
    showId?: number;
}
export declare class GetUserEpisodesRequest extends SpeakeasyBase {
    queryParams: GetUserEpisodesQueryParams;
}
export declare class GetUserEpisodesResponse extends SpeakeasyBase {
    contentType: string;
    markedEpisodes?: shared.MarkedEpisode[];
    statusCode: number;
}
