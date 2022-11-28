import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoLikesAlt1PathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare enum GetVideoLikesAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetVideoLikesAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetVideoLikesAlt1QueryParams extends SpeakeasyBase {
    direction?: GetVideoLikesAlt1DirectionEnum;
    page?: number;
    perPage?: number;
    sort?: GetVideoLikesAlt1SortEnum;
}
export declare class GetVideoLikesAlt1Request extends SpeakeasyBase {
    pathParams: GetVideoLikesAlt1PathParams;
    queryParams: GetVideoLikesAlt1QueryParams;
}
export declare class GetVideoLikesAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.User[];
}
