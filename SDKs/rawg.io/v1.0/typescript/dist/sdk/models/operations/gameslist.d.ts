import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesListQueryParams extends SpeakeasyBase {
    creators?: string;
    dates?: string;
    developers?: string;
    excludeAdditions?: boolean;
    excludeCollection?: number;
    excludeGameSeries?: boolean;
    excludeParents?: boolean;
    excludeStores?: string;
    genres?: string;
    metacritic?: string;
    ordering?: string;
    page?: number;
    pageSize?: number;
    parentPlatforms?: string;
    platforms?: string;
    platformsCount?: number;
    publishers?: string;
    search?: string;
    searchExact?: boolean;
    searchPrecise?: boolean;
    stores?: string;
    tags?: string;
    updated?: string;
}
export declare class GamesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Game[];
}
export declare class GamesListRequest extends SpeakeasyBase {
    queryParams: GamesListQueryParams;
}
export declare class GamesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gamesList200ApplicationJsonObject?: GamesList200ApplicationJson;
}
