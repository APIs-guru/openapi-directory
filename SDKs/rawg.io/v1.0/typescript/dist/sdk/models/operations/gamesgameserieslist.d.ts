import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GamesGameSeriesListPathParams extends SpeakeasyBase {
    gamePk: string;
}
export declare class GamesGameSeriesListQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GamesGameSeriesListRequest extends SpeakeasyBase {
    pathParams: GamesGameSeriesListPathParams;
    queryParams: GamesGameSeriesListQueryParams;
}
export declare class GamesGameSeriesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Game[];
}
export declare class GamesGameSeriesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gamesGameSeriesList200ApplicationJsonObject?: GamesGameSeriesList200ApplicationJson;
}
