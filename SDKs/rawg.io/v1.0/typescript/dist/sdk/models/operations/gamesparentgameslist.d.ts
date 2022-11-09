import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GamesParentGamesListPathParams extends SpeakeasyBase {
    gamePk: string;
}
export declare class GamesParentGamesListQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GamesParentGamesListRequest extends SpeakeasyBase {
    pathParams: GamesParentGamesListPathParams;
    queryParams: GamesParentGamesListQueryParams;
}
export declare class GamesParentGamesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Game[];
}
export declare class GamesParentGamesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gamesParentGamesList200ApplicationJsonObject?: GamesParentGamesList200ApplicationJson;
}
