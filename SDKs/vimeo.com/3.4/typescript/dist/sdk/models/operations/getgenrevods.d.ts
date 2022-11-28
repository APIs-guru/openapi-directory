import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenreVodsPathParams extends SpeakeasyBase {
    genreId: string;
}
export declare enum GetGenreVodsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetGenreVodsFilterEnum {
    Country = "country",
    MyRegion = "my_region"
}
export declare enum GetGenreVodsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Name = "name",
    PublishTime = "publish.time",
    Videos = "videos"
}
export declare class GetGenreVodsQueryParams extends SpeakeasyBase {
    direction?: GetGenreVodsDirectionEnum;
    filter?: GetGenreVodsFilterEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetGenreVodsSortEnum;
}
export declare class GetGenreVodsRequest extends SpeakeasyBase {
    pathParams: GetGenreVodsPathParams;
    queryParams: GetGenreVodsQueryParams;
}
export declare class GetGenreVodsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onDemandPages?: shared.OnDemandPage[];
}
