import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLikesAlt1FilterEnum {
    Embeddable = "embeddable"
}
export declare enum GetLikesAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Duration = "duration",
    Likes = "likes",
    Plays = "plays"
}
export declare class GetLikesAlt1QueryParams extends SpeakeasyBase {
    filter?: GetLikesAlt1FilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetLikesAlt1SortEnum;
}
export declare class GetLikesAlt1Request extends SpeakeasyBase {
    queryParams: GetLikesAlt1QueryParams;
}
export declare class GetLikesAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
