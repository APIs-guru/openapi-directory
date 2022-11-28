import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesScreenshotsListPathParams extends SpeakeasyBase {
    gamePk: string;
}
export declare class GamesScreenshotsListQueryParams extends SpeakeasyBase {
    ordering?: string;
    page?: number;
    pageSize?: number;
}
export declare class GamesScreenshotsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ScreenShot[];
}
export declare class GamesScreenshotsListRequest extends SpeakeasyBase {
    pathParams: GamesScreenshotsListPathParams;
    queryParams: GamesScreenshotsListQueryParams;
}
export declare class GamesScreenshotsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gamesScreenshotsList200ApplicationJsonObject?: GamesScreenshotsList200ApplicationJson;
}
